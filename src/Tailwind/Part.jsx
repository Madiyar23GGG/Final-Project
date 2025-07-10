import './Part.css'
function Part() {
    return(
        <div>

            <div class='flex     '>
                <button class=' border border-black-400   p-2  rounded-lg  ml-135 mr-10'>Alt</button>
                <button class=' border border-black-400   p-2 mr-10 rounded-lg'>Category</button>
                <button class=' border border-black-400   p-2 mr-10 rounded-lg'>Colection</button>
                <button class=' border border-black-400   p-2 mr-10  rounded-lg'>Price</button>
            </div><br /> <br />
            
            <div class='flex'>
                 <div class='bg-gray-50   rounded-2xl   shadow p-4      mr-10 ml-10           '>
                    <img class='rounded-2xl  text-center' src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQB3_oGs8fj9qr4uk7royxTdyzzCGZa0gVzlFO_G_qtjI703BFv" alt="" />
                    <h1>Sun-Glass</h1>
                    <h2>1.75</h2> 
                    <button class='bg-black  text-white   rounded-lg  ml-35   text-xs  p-2'>PLASE BID</button>
                 </div>


                 <div class='bg-gray-50   rounded-2xl   shadow p-4      mr-10 ml-10       '>
                    <img class='rounded-2xl  text-center' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdHkUkO7afE7uQQcZsAIulIavH9-7CY8eZa-5zI41wqWK1Z05M" alt="" />
                    <h1>Sun-Glass</h1>
                    <h2>1.75</h2> 
                    <button class='bg-black  text-white  rounded-lg  ml-35  text-xs  p-2'>PLASE BID</button>
                 </div>


                 <div class='bg-gray-50   rounded-2xl   shadow p-4      mr-10 ml-10      '>
                    <img class='rounded-2xl   text-center' src="data:image/jpeg;base64,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" alt="" />
                    <h1>Sun-Glass</h1>
                    <h2>1.75</h2> 
                    <button class='bg-black  text-white   rounded-lg  ml-35   text-xs  p-2'>PLASE BID</button>
                 </div>



                 <div class='bg-gray-50   rounded-2xl   shadow p-4      mr-10 ml-10       '>
                    <img class='rounded-2xl   text-center' src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRBizAFW8tsTvdT10M9s4WScLOKSOIHK9j-FU3GY1d8QbjmfR_U" alt="" />
                    <h1>NuEvey</h1>
                    <h2>1.25</h2> 
                    <button class='bg-black  text-white   rounded-lg   ml-35  text-xs  p-2'>PLASE BID</button>
                 </div>
            </div><br />










        <div class='flex'>
                 <div class='bg-gray-50   rounded-2xl   shadow p-4      mr-10 ml-10           '>
                    <img class='rounded-2xl   text-center' src="data:image/jpeg;base64,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" alt="" />
                    <h1>Sun-Glass</h1>
                    <h2>1.75</h2> 
                    <button class='bg-black  text-white   rounded-lg  ml-35   text-xs  p-2'>PLASE BID</button>
                 </div>


                 <div class='bg-gray-50   rounded-2xl   shadow p-4      mr-10 ml-10       '>
                    <img class='rounded-2xl  text-center' src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRBizAFW8tsTvdT10M9s4WScLOKSOIHK9j-FU3GY1d8QbjmfR_U" alt="" />
                    <h1>Sun-Glass</h1>
                    <h2>1.75</h2> 
                    <button class='bg-black  text-white  rounded-lg   ml-35  text-xs  p-2'>PLASE BID</button>
                 </div>


                 <div class='bg-gray-50   rounded-2xl   shadow p-4      mr-10 ml-10       '>
                    <img class='rounded-2xl  text-center' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdHkUkO7afE7uQQcZsAIulIavH9-7CY8eZa-5zI41wqWK1Z05M" alt="" />
                    <h1>Sun-Glass</h1>
                    <h2>1.75</h2> 
                    <button class='bg-black  text-white   rounded-lg   ml-35   text-xs  p-2'>PLASE BID</button>
                 </div>



                 <div class='bg-gray-50   rounded-2xl   shadow p-4      mr-10 ml-10       '>
                    <img class='rounded-2xl  text-center' src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQB3_oGs8fj9qr4uk7royxTdyzzCGZa0gVzlFO_G_qtjI703BFv" alt="" />
                    <h1>NuEvey</h1>
                    <h2>1.25</h2> 
                    <button class='bg-black  text-white   rounded-lg  ml-35  text-xs  p-2'>PLASE BID</button>
                 </div>
            </div>
        </div>
    )
}
export default Part;    