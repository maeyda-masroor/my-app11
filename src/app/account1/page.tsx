export default function account(){
    return <div>
        <div className="grid grid-cols-2 grid-rows-2 gap-4">
  <div>
    <label htmlFor="input1" className="block">Label 1</label>
    <input id="input1" type="text" className="border p-2 w-full"/>
  </div>
  <div>
    <label htmlFor="input2" className="block">Label 2</label>
    <input id="input2" type="text" className="border p-2 w-full"/>
  </div>
  <div>
    <label htmlFor="input3" className="block">Label 3</label>
    <input id="input3" type="text" className="border p-2 w-full"/>
  </div>
  <div>
    <label htmlFor="input4" className="block">Label 4</label>
    <input id="input4" type="text" className="border p-2 w-full"/>
  </div>
</div>
<div className="grid grid-cols-1 grid-rows-3 gap-4">
  <div>
    <label htmlFor="input5" className="block">Label 5</label>
    <input id="input5" type="text" className="border p-2 w-full"/>
  </div>
  <div>
    <label htmlFor="input6" className="block">Label 6</label>
    <input id="input6" type="text" className="border p-2 w-full"/>
  </div>
  <div>
    <label htmlFor="input7" className="block">Label 7</label>
    <input id="input7" type="text" className="border p-2 w-full"/>
  </div>
</div>

    </div>
}