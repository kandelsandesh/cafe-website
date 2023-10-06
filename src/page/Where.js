import React from "react";
import MapImg from "../img/map.jpg";

function Where() {
  return (
    <>
      <div id="where">
        <div className="text-white flex justify-center m-10 ">
          <span className="bg-black w-40 h-7 flex justify-center">
            WHERE TO FIND US
          </span>
        </div>
        <div className="flex justify-center items-center">
          <div className="w-[700px]">
            <p>Find us at some address at some place.</p>

            <iframe
              className="h-[400px] my-7"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2541.7385944027474!2d81.59471578690739!3d28.60249491411914!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39a289bbedffb7cf%3A0xaf67970bb8b0efdd!2sSandesh%20Cafe!5e0!3m2!1sen!2snp!4v1696556302410!5m2!1sen!2snp" 
               
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>

            {/* <div
              className=" h-[400px] box-border bg-cover grayscale my-7"
              style={{ backgroundImage: `url(${MapImg})` }}
            ></div> */}

            <div>
              <span className="bg-black text-white">FYI!</span>

              <spam>
                {" "}
                We offer full-service catering for any event, large or small. We
                understand your needs and we will cater the food to satisfy the
                biggerst criteria of them all, both look and taste.
              </spam>
              <div className="my-4">
                <b>Reserve</b>
                <span>
                  a table, ask for today's special or just send us a message:
                </span>
              </div>
              <form>
                <input
                  className="bg-slate-300 w-full h-12 p-2 my-2"
                  type="text"
                  placeholder="Name"
                  required
                />
                <input
                  className="bg-slate-300 w-full h-12 p-2 my-2"
                  type="number"
                  placeholder="How many people"
                  required
                />
                <input
                  className="bg-slate-300 w-full h-12 p-2 my-2"
                  type="datetime-local"
                  defaultValue="2020-11-16T20:00"
                  placeholder="Date and time"
                />
                <input
                  className="bg-slate-300 w-full h-12 p-2 my-2"
                  type="text"
                  placeholder="Message \ Special requirements"
                  required
                />
                <div className="bg-black text-white flex justify-center w-32 h-10 mt-2">
                  <button>SEND MESSAGE</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="h-20 bg-gray-200 flex flex-col p-3 m-3 justify-center items-center">
        <div className="">
          Created By:<b>SANDESH KANDEL</b>
        </div>
        <div className="">sandeshcafe@gmail.com</div>
      </div>
    </>
  );
}

export default Where;
