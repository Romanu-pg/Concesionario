import React, { useState } from "react";

const TheContact = () => {
    const [emaiInput, setEmailInput] = useState("");

    const inputHandler = (e) => {
        setEmailInput(e.target.value);
    };

    const submitForm = (e) => {
        e.preventDefault();
        setEmailInput("");
    };

  return (
    <div className="w-full pt-24 pb-44 px-10">
      <div className="w-[85%] mx-auto">
        <h3 className="text-4xl font-bold tracking-wider mb-8">
          Contáctanos
        </h3>
        <div className="flex flex-col lg:flex-row justify-between space-y-4">
          <p className="text-gray-500 leading-loose lg:w-1/2">
            Si requieres obtener mas información de nuestros productos, ingresa tu correo. 
          </p>
          <div className="">
            <form>
              <div className="flex">
                <input
                  type="email"
                  name="subscribe"
                  id="subscribe"
                  onChange={inputHandler}
                  value={emaiInput}
                  placeholder="Ingresa tu correo"
                  className="form-input rounded-l bg-gray-100 shadow-lg"
                />
                <button
                  type="submit"
                  onClick={submitForm}
                  className="px-5 bg-primary text-white rounded-r shadow-lg capitalize"
                >
                  Enviar
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    );
};

export default TheContact;
