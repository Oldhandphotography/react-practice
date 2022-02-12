import Reac,{useState} from 'react';

function Hookcounter3() {
    const [name,setName]= useState({firstName:'',lastName:''})
  return <div>
      <form>
          {/* <input type="text" /> */}
          <input type="text" value={name.firstName}onChange={e => setName({ ...name,firstName:e.target.value})} />
{/* spread operator will help you out setting lastname and first name manually */}
          <input type="text" value={name.lastName}onChange={e => setName({ ...name,lastName:e.target.value})} />
          <h2>your first name is - {name.firstName}</h2>
          <h2>your last name is -{name.lastName}</h2>
      </form>
  </div>;
}

export default Hookcounter3;
// merge aur update nhi karta useState aise kyuni ya to firstname dekhega ek baar main ya lastname.