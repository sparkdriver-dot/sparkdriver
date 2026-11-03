import { React } from './vendor.js';
import { readPickupAddress, savePickupAddress } from './lib/local-edits.js';
const editorElement = React.createElement;
const editorFieldStyle = { width:'100%', padding:'12px', border:'1px solid #cbd5e1', borderRadius:10, color:'#152238', background:'#fff', marginTop:5 };
const editorButtonStyle = { padding:'11px 18px', borderRadius:10, background:'#0067d6', color:'#fff', fontWeight:700 };
export function PickupAddressEditor({ fallback }) {
  const [address, setAddress] = React.useState(() => readPickupAddress(fallback));
  const [open, setOpen] = React.useState(false);
  const [draft, setDraft] = React.useState('');
  const [error, setError] = React.useState('');
  const taps = React.useRef(0);
  React.useEffect(() => {
    const sync = event => { if (event.key === 'spark-pickup-address-v1') setAddress(readPickupAddress(fallback)); };
    window.addEventListener('storage', sync);
    return () => window.removeEventListener('storage', sync);
  }, [fallback]);
  const reveal = () => { if (++taps.current === 7) { taps.current=0; setDraft(address); setError(''); setOpen(true); } };
  const save = event => {
    event.preventDefault();
    try { setAddress(savePickupAddress(draft)); setOpen(false); }
    catch (problem) { setError(problem.name === 'QuotaExceededError' ? 'Unable to save: browser storage is full.' : problem.message); }
  };
  return editorElement(React.Fragment, null,
    editorElement('button', { type:'button', onClick:reveal, className:'text-muted-foreground', style:{display:'block',textAlign:'left',width:'100%'}, 'aria-label':'Pickup address: '+address }, address),
    open && editorElement('div', { style:{position:'fixed',inset:0,zIndex:1000,background:'#0008',display:'grid',placeItems:'center',padding:20} },
      editorElement('form', { onSubmit:save, role:'dialog', 'aria-modal':true, 'aria-label':'Edit pickup address', onKeyDown:event=>{if(event.key==='Escape')setOpen(false)}, style:{width:'100%',maxWidth:390,padding:24,background:'#fff',color:'#152238',borderRadius:20,boxShadow:'0 20px 60px #0005'} },
        editorElement('h2',{style:{fontWeight:800,fontSize:22,marginBottom:16}},'Edit pickup address'),
        editorElement('label',null,'Pickup address', editorElement('textarea',{value:draft,onChange:event=>setDraft(event.target.value),required:true,autoFocus:true,rows:4,style:editorFieldStyle})),
        error && editorElement('p',{role:'alert',style:{color:'#b91c1c',marginTop:12}},error),
        editorElement('div',{style:{display:'flex',gap:12,justifyContent:'flex-end',marginTop:20}},
          editorElement('button',{type:'button',onClick:()=>setOpen(false),style:{...editorButtonStyle,background:'#e2e8f0',color:'#152238'}},'Cancel'),
          editorElement('button',{type:'submit',style:editorButtonStyle},'Save')))));
}
export function NewItemForm({ items, onAddItem }) {
  const [open,setOpen]=React.useState(false);
  const [error,setError]=React.useState('');
  const submit=event=>{
    event.preventDefault();
    const form=event.currentTarget;
    const data=new FormData(form);
    const name=String(data.get('name')).trim();
    const quantity=Number(data.get('quantity'));
    const price=Number(data.get('price'));
    if(!name || items.some(item=>item.name.toLowerCase()===name.toLowerCase())) {setError('Enter a unique item name. Use + to add more units of an existing item.');return;}
    if(!Number.isSafeInteger(quantity)||quantity<1||!Number.isFinite(price)||price<0) {setError('Enter a positive whole quantity and a valid price.');return;}
    onAddItem({name,desc:String(data.get('description')).trim(),price:'$'+price.toFixed(2),max:quantity,emoji:'📦'});
    form.reset();setError('');setOpen(false);
  };
  return editorElement('section', {className:'rounded-2xl border bg-card p-5 shadow-card'},
    editorElement('button',{type:'button',onClick:()=>setOpen(!open),style:{...editorButtonStyle,width:'100%'}},open?'Close item editor':'+ Add item'),
    open&&editorElement('form',{onSubmit:submit,style:{display:'grid',gap:12,marginTop:16}},
      editorElement('label',null,'Item name',editorElement('input',{name:'name',required:true,style:editorFieldStyle})),
      editorElement('label',null,'Description',editorElement('input',{name:'description',style:editorFieldStyle})),
      editorElement('label',null,'Unit price ($)',editorElement('input',{name:'price',type:'number',min:0,step:'0.01',defaultValue:'0.00',required:true,style:editorFieldStyle})),
      editorElement('label',null,'Quantity',editorElement('input',{name:'quantity',type:'number',min:1,step:1,defaultValue:1,required:true,style:editorFieldStyle})),
      error&&editorElement('p',{role:'alert',style:{color:'#b91c1c'}},error),
      editorElement('button',{type:'submit',style:editorButtonStyle},'Save item')));
}
