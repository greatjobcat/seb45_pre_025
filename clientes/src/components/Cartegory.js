import { Link } from 'react-router-dom';

const Cartegory = () => {
  return (
    <main className="relative">
      <div className=" absolute top-0 w-60 h-auto bg-white drop-shadow-lg pt-6 pb-3 -ml-2 overflow-y-auto">
        <Link to="/">
          <div className="pl-2 py-1 hover:text-black hover:font-bold">
            <button>
              <h1 className="text-sm text-gray-600 ">Home</h1>
            </button>
          </div>
        </Link>
        <div className="pl-2 py-1">
          <h1 className="text-xs pt-3 pb-1 text-gray-600">PUBLIC</h1>
          <div className="flex flex-col items-start ">
            <Link to="/questions">
              <button className="flex items-center py-1 text-sm hover:text-black w-full hover:font-bold">
                <svg
                  aria-hidden="true"
                  className="svg-icon iconGlobe fill-slate-500"
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                >
                  <path d="M9 1C4.64 1 1 4.64 1 9c0 4.36 3.64 8 8 8 4.36 0 8-3.64 8-8 0-4.36-3.64-8-8-8ZM8 15.32a6.46 6.46 0 0 1-4.3-2.74 6.46 6.46 0 0 1-.93-5.01L7 11.68v.8c0 .88.12 1.32 1 1.32v1.52Zm5.72-2c-.2-.66-1-1.32-1.72-1.32h-1v-2c0-.44-.56-1-1-1H6V7h1c.44 0 1-.56 1-1V5h2c.88 0 1.4-.72 1.4-1.6v-.33a6.45 6.45 0 0 1 3.83 4.51 6.45 6.45 0 0 1-1.51 5.73v.01Z" />
                </svg>
                <h1 className="pl-1 text-gray-600">Questions</h1>
              </button>
            </Link>
            <Link to="/tags">
              <button className="py-1 text-sm text-left w-full hover:text-black hover:font-bold cursor-not-allowed">
                <h1 className="pl-6 text-gray-600">Tags</h1>
              </button>
            </Link>
            <Link to="/users">
              <button className="py-1 text-sm text-left w-full hover:text-black hover:font-bold cursor-not-allowed">
                <h1 className="pl-6 text-gray-600">Users</h1>
              </button>
            </Link>
            <button className="py-1 text-sm text-left w-full hover:text-black hover:font-bold cursor-not-allowed">
              <h1 className="pl-6 text-gray-600">Companies</h1>
            </button>
          </div>
        </div>
        <div className="pl-2 py-2">
          <div className="flex items-center justify-between py-1 text-xs">
            <h1 className="text-gray-600">COLLECTIVES</h1>
            <svg
              aria-hidden="true"
              className="svg-icon iconInfoSm mr-2 fill-slate-500 cursor-pointer hover:fill-black"
              width="14"
              height="14"
              viewBox="0 0 14 14"
            >
              <path d="M7 1a6 6 0 1 1 0 12A6 6 0 0 1 7 1Zm1 10V6H6v5h2Zm0-6V3H6v2h2Z" />
            </svg>
          </div>
          <div className="flex flex-col items-start">
            <button className="flex items-center py-1 text-sm text-left w-full hover:text-black hover:font-bold cursor-not-allowed">
              <svg
                aria-hidden="true"
                className="mt-auto fc-orange-400 svg-icon iconStarVerified fill-orange-500"
                width="18"
                height="18"
                viewBox="0 0 18 18"
              >
                <path d="M9.86.89a1.14 1.14 0 0 0-1.72 0l-.5.58c-.3.35-.79.48-1.23.33l-.72-.25a1.14 1.14 0 0 0-1.49.85l-.14.76c-.1.45-.45.8-.9.9l-.76.14c-.67.14-1.08.83-.85 1.49l.25.72c.15.44.02.92-.33 1.23l-.58.5a1.14 1.14 0 0 0 0 1.72l.58.5c.35.3.48.79.33 1.23l-.25.72c-.23.66.18 1.35.85 1.49l.76.14c.45.1.8.45.9.9l.14.76c.14.67.83 1.08 1.49.85l.72-.25c.44-.15.92-.02 1.23.33l.5.58c.46.52 1.26.52 1.72 0l.5-.58c.3-.35.79-.48 1.23-.33l.72.25c.66.23 1.35-.18 1.49-.85l.14-.76c.1-.45.45-.8.9-.9l.76-.14c.67-.14 1.08-.83.85-1.49l-.25-.72c-.15-.44-.02-.92.33-1.23l.58-.5c.52-.46.52-1.26 0-1.72l-.58-.5c-.35-.3-.48-.79-.33-1.23l.25-.72a1.14 1.14 0 0 0-.85-1.49l-.76-.14c-.45-.1-.8-.45-.9-.9l-.14-.76a1.14 1.14 0 0 0-1.49-.85l-.72.25c-.44.15-.92.02-1.23-.33l-.5-.58Zm-.49 2.67L10.6 6.6c.05.15.19.24.34.25l3.26.22c.36.03.5.48.23.71l-2.5 2.1a.4.4 0 0 0-.14.4l.8 3.16a.4.4 0 0 1-.6.44L9.2 12.13a.4.4 0 0 0-.42 0l-2.77 1.74a.4.4 0 0 1-.6-.44l.8-3.16a.4.4 0 0 0-.13-.4l-2.5-2.1a.4.4 0 0 1 .22-.7l3.26-.23a.4.4 0 0 0 .34-.25l1.22-3.03a.4.4 0 0 1 .74 0Z" />
              </svg>
              <h1 className="pl-1 text-gray-600">Explore Collectives</h1>
            </button>
          </div>
        </div>
        <div className="pl-2 py-1">
          <h1 className="py-1 text-xs text-gray-600">TEAMS</h1>
          <div className="flex flex-col items-center px-8">
            <div className="text-xs pt-3">
              <h1 className="font-bold">Stack Overflow for Teams –</h1>
              <h2>Start collaborating and sharing organizational knowledge.</h2>
            </div>
            <svg
              fill="none"
              height="114"
              viewBox="0 0 139 114"
              width="139"
              className="my-2"
            >
              <linearGradient id="a">
                <stop offset="0" stopColor="#d6d9dc" />
                <stop offset="1" stopColor="#eff0f1" />
              </linearGradient>
              <linearGradient
                id="b"
                gradientUnits="userSpaceOnUse"
                x1="84.8958"
                x2="129.475"
                xlinkHref="#a"
                y1="56.7916"
                y2="56.7916"
              />
              <linearGradient
                id="c"
                gradientUnits="userSpaceOnUse"
                x1="84.8958"
                x2="129.475"
                xlinkHref="#a"
                y1="71.7916"
                y2="71.7916"
              />
              <linearGradient
                id="d"
                gradientUnits="userSpaceOnUse"
                x1="84.9154"
                x2="121.136"
                xlinkHref="#a"
                y1="86.7916"
                y2="86.7916"
              />
              <linearGradient
                id="e"
                gradientUnits="userSpaceOnUse"
                x1="7"
                x2="49"
                y1="56"
                y2="56"
              >
                <stop offset="0" stopColor="#6521b1" />
                <stop offset="1" stopColor="#eb4426" />
              </linearGradient>
              <path
                d="m98.6035 23h11.7925c.334 0 .604.2702.604.6035v8.793c0 .3333-.27.6035-.604.6035h-9.177c-.142 0-.278.0495-.387.1399l-1.8421 1.5352c-.3931.3276-.9899.048-.9899-.4637v-1.2114-9.3965c0-.3333.2702-.6035.6035-.6035z"
                fill="#ffcf10"
                opacity=".2"
              />
              <path
                d="m100.104 21.5h11.792c.334 0 .604.2702.604.6035v8.793c0 .3333-.27.6035-.604.6035h-7.782c-.12 0-.238.0359-.338.1031l-3.335 2.249c-.401.2703-.941-.017-.941-.5004v-1.8517-9.3965c0-.3333.2702-.6035.604-.6035z"
                stroke="#ffcf10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="m53.3233 84h-13.6466c-.3737 0-.6767.303-.6767.6767v9.6358c0 .3738.303.6767.6767.6767h11.3099c.211 0 .4099.0985.5379.2663l1.2608 1.6524c.3928.5148 1.2147.2371 1.2147-.4104v-.9937-10.8271c0-.3737-.303-.6767-.6767-.6767z"
                fill="#f48024"
                opacity=".2"
              />
              <path
                d="m51.8233 82.5h-13.6466c-.3737 0-.6767.303-.6767.6767v9.6466c0 .3737.303.6767.6767.6767h9.5225c.1646 0 .3235.06.447.1687l3.2301 2.8424c.4371.3847 1.1237.0743 1.1237-.508v-2.5031-10.3233c0-.3737-.303-.6767-.6767-.6767z"
                stroke="#f48024"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <rect
                fill="#0c0d0e"
                height="62"
                rx="6.48649"
                width="62"
                x="31"
                y="13"
              />
              <path d="m47 32h7v1h-7z" fill="#fff" />
              <path
                d="m58.5191 29.6461c0-.3399.0074-.628.0223-.8644.0198-.2364.0619-.4481.1263-.6353.0644-.1921.161-.3669.2898-.5245.1288-.1625.3097-.3349.5425-.5171.1684-.1527.3369-.3128.5053-.4802.1684-.1724.3195-.3472.4533-.5245.1387-.1823.2502-.3669.3344-.5541.0842-.1871.1263-.3743.1263-.5614 0-.4482-.1214-.7757-.3641-.9826-.2427-.2068-.597-.3103-1.0626-.3103-.1784 0-.3518.0247-.5202.0739-.1684.0443-.3195.1182-.4533.2216-.1288.1035-.2353.2364-.3195.399-.0793.1625-.1214.357-.1264.5836h-2.0732c.005-.5024.0991-.9382.2824-1.3076.1833-.3743.431-.6846.7431-.9308.3121-.2463.6787-.4285 1.0998-.5467.4211-.1231.8768-.1847 1.3673-.1847.5499 0 1.0428.0616 1.4787.1847.436.1231.8026.3078 1.0998.5541.3022.2413.5326.5417.6911.9012.1585.3596.2378.7757.2378 1.2485 0 .3497-.0594.6698-.1783.9604-.1189.2856-.2725.5541-.4608.8052-.1882.2463-.4037.4827-.6465.7092-.2378.2217-.478.4384-.7208.6501-.1486.1478-.265.2783-.3492.3916-.0842.1132-.1462.229-.1858.3472-.0347.1182-.057.2487-.0669.3915-.0099.1379-.0148.3054-.0148.5024zm-.3047 2.2384c0-.1625.0273-.3128.0818-.4507.0545-.1428.1337-.2659.2378-.3693.104-.1035.2303-.1823.379-.2364.1486-.0591.317-.0887.5053-.0887.1833 0 .3492.0296.4978.0887.1536.0541.2824.1329.3864.2364.1041.1034.1833.2265.2378.3693.0595.1379.0892.2882.0892.4507 0 .1576-.0297.3053-.0892.4432-.0545.1379-.1337.2561-.2378.3546-.104.0985-.2328.1749-.3864.2291-.1486.0591-.3145.0886-.4978.0886-.1883 0-.3567-.0295-.5053-.0886-.1487-.0542-.275-.1306-.379-.2291-.1041-.0985-.1833-.2167-.2378-.3546s-.0818-.2856-.0818-.4432z"
                fill="#0095ff"
              />
              <path d="m38 24 6 4.5-6 4.5" stroke="#fff" />
              <rect
                fill="#fff"
                height="61"
                rx="4.37263"
                stroke="#e4e6e8"
                width="61"
                x="61.5"
                y="41.5"
              />
              <path
                d="m81.3761 68.0719-1.5746-1.5746-7.3594 7.3594-2.8924-2.8924-1.5746 1.5746 4.467 4.467z"
                fill="#6ecb64"
              />
              <rect
                fill="url(#b)"
                height="10"
                opacity=".5"
                rx=".450631"
                width="32"
                x="85"
                y="52"
              />
              <rect
                fill="url(#c)"
                height="10"
                opacity=".5"
                rx=".450631"
                width="32"
                x="85"
                y="67"
              />
              <rect
                fill="url(#d)"
                height="10"
                opacity=".5"
                rx=".450631"
                width="26"
                x="85"
                y="82"
              />
              <path d="m82 82h-15l8 8z" fill="#e4e6e8" />
              <path d="m67 62h15l-8-8z" fill="#e4e6e8" />
              <rect fill="url(#e)" height="20" rx="2" width="42" x="7" y="46" />
              <path
                d="m15.7131 59.2517.968-.1662v-6.8116l-.968-.1662v-.7542h6.6809v2.0785h-.9977l-.095-1.1581h-3.4503v2.9812h3.3434v.9205h-3.3434v2.9099l.968.1662v.7483h-3.1059zm7.5182-4.923v-.7542h2.0132l.1128.9323c.1822-.3286.4058-.5859.6711-.772.2692-.1861.576-.2791.9205-.2791.091 0 .1841.0079.2791.0238.099.0118.1742.0257.2257.0415l-.1544 1.0868-.6652-.0356c-.3088 0-.5681.0732-.7779.2197-.2098.1425-.3722.3444-.487.6057v3.6879l.968.1662v.7483h-3.1059v-.7483l.968-.1662v-4.5905zm7.8508 5.796c-.8947 0-1.6074-.2969-2.1379-.8908-.5265-.5978-.7898-1.3718-.7898-2.3219v-.2613c0-.9146.2712-1.6747.8136-2.2805.5463-.6096 1.1917-.9145 1.936-.9145.863 0 1.5163.2613 1.9597.7839.4473.5226.671 1.2194.671 2.0904v.7304h-4.1688l-.0178.0297c.0118.6176.1682 1.1264.4691 1.5262.3009.3959.7225.5939 1.2649.5939.3959 0 .7423-.0555 1.0393-.1663.3008-.1148.5602-.2712.7779-.4692l.4573.7602c-.2296.2217-.5345.4097-.9146.5641-.3761.1505-.8294.2257-1.3599.2257zm-.1781-5.7485c-.392 0-.7265.1663-1.0037.4988-.2771.3286-.4473.7423-.5107 1.2412l.0119.0297h2.9633v-.1544c0-.4593-.1227-.8433-.3682-1.1521-.2454-.3088-.6096-.4632-1.0926-.4632zm6.7224 5.7485c-.8947 0-1.6074-.2969-2.1379-.8908-.5265-.5978-.7898-1.3718-.7898-2.3219v-.2613c0-.9146.2712-1.6747.8136-2.2805.5463-.6096 1.1916-.9145 1.9359-.9145.8631 0 1.5164.2613 1.9598.7839.4473.5226.671 1.2194.671 2.0904v.7304h-4.1688l-.0179.0297c.0119.6176.1683 1.1264.4692 1.5262.3009.3959.7225.5939 1.2649.5939.3959 0 .7423-.0555 1.0392-.1663.3009-.1148.5603-.2712.778-.4692l.4573.7602c-.2297.2217-.5345.4097-.9146.5641-.3761.1505-.8294.2257-1.3599.2257zm-.1782-5.7485c-.3919 0-.7264.1663-1.0036.4988-.2771.3286-.4473.7423-.5107 1.2412l.0119.0297h2.9633v-.1544c0-.4593-.1227-.8433-.3682-1.1521-.2454-.3088-.6097-.4632-1.0927-.4632z"
                fill="#fff"
              />
            </svg>
            <button className="bg-orange-500 rounded-md w-full py-1 drop-shadow cursor-not-allowed">
              <h1 className="text-white text-sm">Create a free Team</h1>
            </button>
            <button className="w-full rounded-md py-1 drop-shadow cursor-not-allowed">
              <h1 className="text-gray-600 text-sm">Why Teams?</h1>
            </button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Cartegory;
