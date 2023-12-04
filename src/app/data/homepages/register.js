"use client";

export default function Register({ registerFlag, setRegisterFlag }) {
  const backgroundEntring = `ease-out duration-300 opacity-100`;
  const backgrounLeave = `ease-in duration-200 opacity-0 hidden`;

  const modalEntring = `ease-out duration-300 opacity-100 translate-y-0 sm:scale-100`;
  const modalLeaving = `ease-in duration-200 opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95`;

  const modalDisplay = registerFlag === 1 ? modalEntring : modalLeaving;
  const backgroundDisplay =
    registerFlag === 1 ? backgroundEntring : backgrounLeave;
  const handleAction = () => {
    setRegisterFlag(0);
  };

  const blueHead = {
    backgroundColor: "rgba(0, 109, 255, 1);",
    width: "100%",
    height: "30px",
    position: "absolute",
    top: "0",
    marginBotton: "2px",
  };
  return (
    <>
      <div
        className={`relative z-10 ${backgroundDisplay}`}
        aria-labelledby="modal-title"
        role="dialog"
        aria-modal="true"
      >
        <div
          className={`fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity `}
        ></div>

        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div
            className={`flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0 ${modalDisplay}`}
          >
            <div
              className={`relative transform overflow-hidden bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg `}
            >
              <div className="blueHead" style={blueHead}></div>
              <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                <div className="sm:flex sm:items-start mt-3">
                  <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-center">
                    <div className="mt-2">
                      <p className="text-sm text-gray-900">
                        Alamat email digunakan untuk masuk ke akun Anda. Kami
                        akan mengirimkan Anda kode konfirmasi ke alamat email
                        untuk verifikasi
                      </p>
                    </div>
                    <form className="bg-white rounded-lg  pt-6 pb-8 mb-4">
                      <div className="mb-4">
                        <input
                          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                          id="username"
                          type="text"
                          placeholder="Alamat Email*"
                        />
                      </div>
                      <div class="relative w-7 mr-2 align-middle select-none transition duration-200 ease-in">
                        <input
                          type="checkbox"
                          name="toggle"
                          id="toggle"
                          class="toggle-checkbox absolute block w-4 h-4 rounded-full bg-white border-2 appearance-none cursor-pointer"
                        />
                        <label
                          for="toggle"
                          class="toggle-label block overflow-hidden h-4 rounded-full bg-gray-300 cursor-pointer"
                        ></label>
                      </div>
                      <label
                        for="toggle"
                        class="text-xs  text-gray-700 absolute left-20 top-40"
                      >
                        Toggle me.
                      </label>
                      <h4 className="text-center mt-3">Data Pribadi</h4>
                      <div className=" mt-2">
                        <input
                          className="shadow appearance-none border  rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                          id="password"
                          type="password"
                          placeholder="Nama Lengkap*"
                        />
                      </div>
                      <div className="">
                        <input
                          className="shadow appearance-none border  rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                          id="password"
                          type="password"
                          placeholder="Kota*"
                        />
                      </div>
                      <div className="">
                        <input
                          className="shadow appearance-none border  rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                          id="password"
                          type="password"
                          placeholder="Password*"
                        />
                      </div>
                      <div className="flex">
                        <input
                          type="checkbox"
                          className="shrink-0 mt-0.5 border-gray-200 rounded text-blue-600 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-gray-800 dark:border-gray-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
                          id="hs-default-checkbox"
                        />
                        <label
                          for="hs-default-checkbox"
                          className="text-sm text-gray-500 ms-3 dark:text-gray-400"
                        >
                         Saya menyetujui ketentuan berikut*
                        </label>
                      </div>

                      <span className=" mt-2 text-gray-500 hover:text-blue-500 cursor-pointer float-left font-light text-sm">
                        <p className="login">sudah punya akun klik disini!</p>
                      </span>
                    </form>
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                <button
                  type="button"
                  className="inline-flex w-full justify-center rounded-md bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 sm:ml-3 sm:w-auto"
                  onClick={handleAction}
                >
                  Daftar
                </button>
                <button
                  type="button"
                  className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                  onClick={handleAction}
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
