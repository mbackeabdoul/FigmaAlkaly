import React from 'react';

const Inbox = () => {
  return (
    <div className="bg-gray-100 h-screen p-6 flex flex-col">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-semibold">Inbox</h2>
        <button className="bg-blue-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-blue-600 transition duration-200">
          + Compose
        </button>
      </div>

      <div className="mb-4 flex items-center">
        <input 
          type="search" 
          placeholder="Search mail" 
          className="px-4 py-2 w-full md:w-1/2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" 
        />
      </div>

      <ul className="space-y-2">
        <li className="flex items-center justify-between py-3 px-4 bg-white border-b hover:bg-gray-50 rounded-lg transition duration-200">
          <div className="flex items-center">
            <button className="mr-4 text-lg text-gray-400">⭐</button>
            <div className="flex flex-col">
              <span className="font-medium text-gray-800">Julia Jalal</span>
              <span className="text-sm text-gray-500">Our Bachelor of Commerce program is ACBSB-accredited.</span>
            </div>
          </div>
          <div className="text-sm text-gray-400">8:38 AM</div>
        </li>

        <li className="flex items-center justify-between py-3 px-4 bg-white border-b hover:bg-gray-50 rounded-lg transition duration-200">
          <div className="flex items-center">
            <button className="mr-4 text-lg text-yellow-500">⭐</button>
            <div className="flex flex-col">
              <span className="font-medium text-gray-800">Minerva Barnett</span>
              <span className="text-sm text-gray-500">Get Best Advertiser In Your Side Pocket</span>
            </div>
          </div>
          <div className="text-sm text-gray-400">8:13 AM</div>
        </li>

        <li className="flex items-center justify-between py-3 px-4 bg-white border-b hover:bg-gray-50 rounded-lg transition duration-200">
          <div className="flex items-center">
            <button className="mr-4 text-lg text-gray-400">⭐</button>
            <div className="flex flex-col">
              <span className="font-medium text-gray-800">Peter Lewis</span>
              <span className="text-sm text-gray-500">Vacation Home Rental Success</span>
            </div>
          </div>
          <div className="text-sm text-gray-400">7:52 PM</div>
        </li>

        <li className="flex items-center justify-between py-3 px-4 bg-white border-b hover:bg-gray-50 rounded-lg transition duration-200">
          <div className="flex items-center">
            <button className="mr-4 text-lg text-gray-400">⭐</button>
            <div className="flex flex-col">
              <span className="font-medium text-gray-800">Anthony Briggs</span>
              <span className="text-sm text-gray-500">Free Classifieds Using Them To Promote Your Stuff Online</span>
            </div>
          </div>
          <div className="text-sm text-gray-400">7:52 PM</div>
        </li>

        <li className="flex items-center justify-between py-3 px-4 bg-white border-b hover:bg-gray-50 rounded-lg transition duration-200">
          <div className="flex items-center">
            <button className="mr-4 text-lg text-gray-400">⭐</button>
            <div className="flex flex-col">
              <span className="font-medium text-gray-800">Clifford Morgan</span>
              <span className="text-sm text-gray-500">Enhance Your Brand Potential With Giant Advertising Blimps</span>
            </div>
          </div>
          <div className="text-sm text-gray-400">4:13 PM</div>
        </li>

        <li className="flex items-center justify-between py-3 px-4 bg-white border-b hover:bg-gray-50 rounded-lg transition duration-200">
          <div className="flex items-center">
            <button className="mr-4 text-lg text-gray-400">⭐</button>
            <div className="flex flex-col">
              <span className="font-medium text-gray-800">Cecilia Webster</span>
              <span className="text-sm text-gray-500">Always Look On The Bright Side Of Life</span>
            </div>
          </div>
          <div className="text-sm text-gray-400">3:52 PM</div>
        </li>

        <li className="flex items-center justify-between py-3 px-4 bg-white border-b hover:bg-gray-50 rounded-lg transition duration-200">
          <div className="flex items-center">
            <button className="mr-4 text-lg text-gray-400">⭐</button>
            <div className="flex flex-col">
              <span className="font-medium text-gray-800">Harvey Manning</span>
              <span className="text-sm text-gray-500">Curling Irons Are As Individual As The Women Who Use Them</span>
            </div>
          </div>
          <div className="text-sm text-gray-400">2:30 PM</div>
        </li>

        <li className="flex items-center justify-between py-3 px-4 bg-white border-b hover:bg-gray-50 rounded-lg transition duration-200">
          <div className="flex items-center">
            <button className="mr-4 text-lg text-yellow-500">⭐</button>
            <div className="flex flex-col">
              <span className="font-medium text-gray-800">Willie Blake</span>
              <span className="text-sm text-gray-500">Our Bachelor of Commerce program is ACBSB-accredited.</span>
            </div>
          </div>
          <div className="text-sm text-gray-400">8:38 AM</div>
        </li>

        <li className="flex items-center justify-between py-3 px-4 bg-white border-b hover:bg-gray-50 rounded-lg transition duration-200">
          <div className="flex items-center">
            <button className="mr-4 text-lg text-yellow-500">⭐</button>
            <div className="flex flex-col">
              <span className="font-medium text-gray-800">Minerva Barnett</span>
              <span className="text-sm text-gray-500">Get Best Advertiser In Your Side Pocket</span>
            </div>
          </div>
          <div className="text-sm text-gray-400">8:13 AM</div>
        </li>

        <li className="flex items-center justify-between py-3 px-4 bg-white border-b hover:bg-gray-50 rounded-lg transition duration-200">
          <div className="flex items-center">
            <button className="mr-4 text-lg text-gray-400">⭐</button>
            <div className="flex flex-col">
              <span className="font-medium text-gray-800">Fanny Weaver</span>
              <span className="text-sm text-gray-500">Free Classifieds Using Them To Promote Your Stuff Online</span>
            </div>
          </div>
          <div className="text-sm text-gray-400">7:52 PM</div>
        </li>
      </ul>
    </div>
  );
};

export default Inbox;
