const Footer = () => {
  return (
    <div className="dark:bg-gray-50 dark:text-gray-800">
      <footer className=" divide-y px-4 max-w-7xl mx-auto">
        <div className="container flex flex-col justify-between py-10 mx-auto space-y-8 lg:flex-row lg:space-y-0">
          <div>
            <a className="flex space-x-3 justify-start">
              <div className="flex items-center justify-center w-12 h-12 rounded-full dark:bg-violet-600">
                <img src="/logos.png" />
              </div>
              <span className="self-center text-3xl font-semibold">
                DrawingDen
              </span>
            </a>
          </div>
          <div className="grid grid-cols-1 text-sm gap-y-8 sm:grid-cols-4">
            <div className="space-y-3 col-span-2">
              <h3 className="tracking-wide uppercase dark:text-gray-900 font-bold">
                Contract Us
              </h3>
              <ul className="space-y-1">
                <li>
                  <a>drawingden1@gmail.com</a>
                </li>
                <li>
                  <a>New York City, USA</a>
                </li>
                <li>
                  <a>About</a>
                </li>
                <li>
                  <a>FAQ</a>
                </li>
              </ul>
            </div>
            <div className="space-y-3">
              <div className="uppercase dark:text-gray-900 font-bold">
                Social media
              </div>
              <div className="flex justify-start space-x-3">
                <a title="Facebook" className="flex items-center w-11 p-1">
                  <img src="/Facebook.png" alt="" />
                </a>
                <a title="Twitter" className="flex items-center  w-11 p-1">
                  <img src="/Instagram.png" alt="" />
                </a>
                <a title="Instagram" className="flex items-center w-11 p-1">
                  <img src="/Youtube.png" alt="" />
                </a>
                <a title="Instagram" className="flex items-center w-11 p-1">
                  <img src="/Pinterest.png" alt="" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="py-6 text-sm text-center dark:text-gray-600">
          © 2024 DrawingDen. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default Footer;
