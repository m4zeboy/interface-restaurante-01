import Balance from '../components/balance'
import Header from '../components/header'
import PurchaseButton from '../components/purchase-button'

// import DishOfTheDay from '../components/dish-of-the-day'
// import PurchasesHistory from '../components/purchases-history'
// import PurchaseButton from '../components/purchase-button'

export default function Protected() {
  return (
    <div>
      <Header></Header>
      <main className="max-w-[393px] h-auto mx-auto">
        <section className="pt-1 px-5 pb-4">
          <div className="relative w-full">
            <div className="absolute w-full h-full top-4 left-4">
              <p>RU Digital</p>
              <p>2023.XXXX.XXX-X</p>
            </div>
            <div className="border border-slate-300 rounded-md overflow-hidden shadow-lg">
              <svg
                width="351"
                height="218"
                viewBox="0 0 350 219"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g filter="url(#filter0_f_2_16)">
                  <ellipse
                    cx="60.5"
                    cy="112.5"
                    rx="93.5"
                    ry="87.5"
                    fill="#CE4CE3"
                  />
                </g>
                <g filter="url(#filter1_f_2_16)">
                  <ellipse
                    cx="163.5"
                    cy="33.5"
                    rx="103.5"
                    ry="98.5"
                    fill="url(#paint0_linear_2_16)"
                  />
                </g>
                <g filter="url(#filter2_f_2_16)">
                  <circle
                    cx="233.5"
                    cy="195.5"
                    r="114.5"
                    fill="url(#paint1_linear_2_16)"
                  />
                </g>
                <defs>
                  <filter
                    id="filter0_f_2_16"
                    x="-153"
                    y="-95"
                    width="427"
                    height="415"
                    filterUnits="userSpaceOnUse"
                    colorInterpolationFilters="sRGB"
                  >
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="BackgroundImageFix"
                      result="shape"
                    />
                    <feGaussianBlur
                      stdDeviation="60"
                      result="effect1_foregroundBlur_2_16"
                    />
                  </filter>
                  <filter
                    id="filter1_f_2_16"
                    x="-90"
                    y="-215"
                    width="507"
                    height="497"
                    filterUnits="userSpaceOnUse"
                    colorInterpolationFilters="sRGB"
                  >
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="BackgroundImageFix"
                      result="shape"
                    />
                    <feGaussianBlur
                      stdDeviation="75"
                      result="effect1_foregroundBlur_2_16"
                    />
                  </filter>
                  <filter
                    id="filter2_f_2_16"
                    x="19"
                    y="-19"
                    width="429"
                    height="429"
                    filterUnits="userSpaceOnUse"
                    colorInterpolationFilters="sRGB"
                  >
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="BackgroundImageFix"
                      result="shape"
                    />
                    <feGaussianBlur
                      stdDeviation="50"
                      result="effect1_foregroundBlur_2_16"
                    />
                  </filter>
                  <linearGradient
                    id="paint0_linear_2_16"
                    x1="239.68"
                    y1="14"
                    x2="120.785"
                    y2="190.554"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#1EFC42" />
                    <stop offset="1" stopColor="#1EFCFC" />
                  </linearGradient>
                  <linearGradient
                    id="paint1_linear_2_16"
                    x1="233.5"
                    y1="81"
                    x2="305"
                    y2="256"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#FFF858" />
                    <stop offset="1" stopColor="#CBC200" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </div>
        </section>
        <Balance></Balance>
        {/* <DishOfTheDay></DishOfTheDay> */}

        {/* <PurchasesHistory></PurchasesHistory> */}
        <div className="py-8"></div>
        <PurchaseButton></PurchaseButton>
      </main>
    </div>
  )
}
