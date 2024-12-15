export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200 px-4 sm:px-6 md:px-16 py-8  text-gray-700">
      <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row justify-between">
        {/* Left Section */}
        <div className="md:w-1/3 relative ">
          <h2 className="text-blue-600 text-2xl font-bold">MORENT</h2>
          <p className="mt-4 text-sm text-gray-500 leading-relaxed">
            Our vision is to provide convenience <br /> and help increase your
            sales business.
          </p>
        </div>

        {/* Right Section */}
        <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-16 md:w-2/3 mt-8 md:mt-0 md:ml-auto md:justify-end">
          {/* Column 1 */}
          <div>
            <h3 className="font-semibold text-gray-900">About</h3>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <a href="#" className="hover:text-blue-600 transition">
                  How it works
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-600 transition">
                  Featured
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-600 transition">
                  Partnership
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-600 transition">
                  Business Relation
                </a>
              </li>
            </ul>
          </div>

          {/* Column 2 */}
          <div>
            <h3 className="font-semibold text-gray-900">Community</h3>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <a href="#" className="hover:text-blue-600 transition">
                  Events
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-600 transition">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-600 transition">
                  Podcast
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-600 transition">
                  Invite a friend
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3 */}
          <div>
            <h3 className="font-semibold text-gray-900">Socials</h3>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <a href="#" className="hover:text-blue-600 transition">
                  Discord
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-600 transition">
                  Instagram
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-600 transition">
                  Twitter
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-600 transition">
                  Facebook
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-8 border-t border-gray-200 pt-6 flex flex-col md:flex-row justify-between items-center text-sm font-semibold text-gray-700">
        <p>&copy; 2022 MORENT. All rights reserved</p>
        <div className="flex space-x-4 mt-4 md:mt-0">
          <a href="#" className="hover:text-blue-600 transition">
            Privacy & Policy
          </a>
          <a href="#" className="hover:text-blue-600 transition">
            Terms & Condition
          </a>
        </div>
      </div>
    </footer>
  );
}
