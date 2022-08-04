import { css } from '@emotion/react';
import { useAppSelector } from '../store/hooks';
import Card from "../components/Card";
import FloatingActionButton from "../components/FloatingActionButton";

export default function Home() {
  const complimentList = useAppSelector(state => state.complimentList);
  return (
    <>
      <svg
        width="90%"
        viewBox="0 0 1269 295"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        css={css`
          display: block;
          margin: 0 auto;
        `}
      >
        <title>나의 칭찬 보관함</title>
        <path d="M5.21023 1.90909H20.9773L58.0511 92.4631H59.3295L96.4034 1.90909H112.17V111H99.8125V28.1165H98.7472L64.6562 111H52.7244L18.6335 28.1165H17.5682V111H5.21023V1.90909ZM129.282 1.90909H144.41L174.666 52.8324H175.944L206.2 1.90909H221.328L181.91 66.0426V111H168.7V66.0426L129.282 1.90909ZM368.385 36H355.175C354.393 32.2003 353.026 28.8622 351.073 25.9858C349.156 23.1094 346.812 20.6946 344.042 18.7415C341.308 16.7528 338.271 15.2614 334.933 14.267C331.595 13.2727 328.115 12.7756 324.493 12.7756C317.888 12.7756 311.904 14.4446 306.542 17.7827C301.215 21.1207 296.972 26.0391 293.811 32.5376C290.686 39.0362 289.124 47.0085 289.124 56.4545C289.124 65.9006 290.686 73.8729 293.811 80.3714C296.972 86.87 301.215 91.7884 306.542 95.1264C311.904 98.4645 317.888 100.134 324.493 100.134C328.115 100.134 331.595 99.6364 334.933 98.642C338.271 97.6477 341.308 96.174 344.042 94.2209C346.812 92.2322 349.156 89.7997 351.073 86.9233C353.026 84.0114 354.393 80.6733 355.175 76.9091H368.385C367.391 82.4844 365.58 87.4737 362.952 91.8771C360.324 96.2805 357.057 100.027 353.151 103.116C349.244 106.17 344.859 108.496 339.994 110.094C335.164 111.692 329.997 112.491 324.493 112.491C315.189 112.491 306.915 110.219 299.67 105.673C292.426 101.128 286.727 94.6648 282.572 86.2841C278.417 77.9034 276.339 67.9602 276.339 56.4545C276.339 44.9489 278.417 35.0057 282.572 26.625C286.727 18.2443 292.426 11.7812 299.67 7.23579C306.915 2.69034 315.189 0.41761 324.493 0.41761C329.997 0.41761 335.164 1.21662 339.994 2.81463C344.859 4.41264 349.244 6.75639 353.151 9.84588C357.057 12.8999 360.324 16.6285 362.952 21.032C365.58 25.3999 367.391 30.3892 368.385 36ZM481.777 56.4545C481.777 67.9602 479.7 77.9034 475.545 86.2841C471.39 94.6648 465.691 101.128 458.446 105.673C451.202 110.219 442.928 112.491 433.624 112.491C424.32 112.491 416.046 110.219 408.801 105.673C401.557 101.128 395.857 94.6648 391.703 86.2841C387.548 77.9034 385.47 67.9602 385.47 56.4545C385.47 44.9489 387.548 35.0057 391.703 26.625C395.857 18.2443 401.557 11.7812 408.801 7.23579C416.046 2.69034 424.32 0.41761 433.624 0.41761C442.928 0.41761 451.202 2.69034 458.446 7.23579C465.691 11.7812 471.39 18.2443 475.545 26.625C479.7 35.0057 481.777 44.9489 481.777 56.4545ZM468.993 56.4545C468.993 47.0085 467.413 39.0362 464.252 32.5376C461.127 26.0391 456.884 21.1207 451.521 17.7827C446.195 14.4446 440.229 12.7756 433.624 12.7756C427.019 12.7756 421.035 14.4446 415.673 17.7827C410.346 21.1207 406.102 26.0391 402.942 32.5376C399.817 39.0362 398.254 47.0085 398.254 56.4545C398.254 65.9006 399.817 73.8729 402.942 80.3714C406.102 86.87 410.346 91.7884 415.673 95.1264C421.035 98.4645 427.019 100.134 433.624 100.134C440.229 100.134 446.195 98.4645 451.521 95.1264C456.884 91.7884 461.127 86.87 464.252 80.3714C467.413 73.8729 468.993 65.9006 468.993 56.4545ZM503.99 1.90909H519.757L556.83 92.4631H558.109L595.183 1.90909H610.95V111H598.592V28.1165H597.526L563.436 111H551.504L517.413 28.1165H516.347V111H503.99V1.90909ZM637.437 111V1.90909H674.298C682.856 1.90909 689.852 3.45383 695.285 6.54332C700.754 9.5973 704.802 13.7344 707.43 18.9545C710.058 24.1747 711.371 29.9986 711.371 36.4261C711.371 42.8537 710.058 48.6953 707.43 53.951C704.837 59.2067 700.825 63.397 695.391 66.522C689.958 69.6115 682.998 71.1562 674.511 71.1562H648.09V59.4375H674.085C679.944 59.4375 684.649 58.4254 688.2 56.4013C691.751 54.3771 694.326 51.6428 695.924 48.1982C697.558 44.718 698.374 40.794 698.374 36.4261C698.374 32.0582 697.558 28.152 695.924 24.7074C694.326 21.2628 691.734 18.5639 688.147 16.6108C684.56 14.6222 679.802 13.6278 673.871 13.6278H650.647V111H637.437ZM732.652 111V1.90909H745.862V99.2812H796.572V111H732.652ZM830.237 1.90909V111H817.027V1.90909H830.237ZM856.724 1.90909H872.491L909.565 92.4631H910.843L947.917 1.90909H963.684V111H951.326V28.1165H950.261L916.17 111H904.238L870.147 28.1165H869.082V111H856.724V1.90909ZM990.171 111V1.90909H1056.01V13.6278H1003.38V50.4886H1052.6V62.2074H1003.38V99.2812H1056.86V111H990.171ZM1166.33 1.90909V111H1153.54L1094.1 25.3466H1093.03V111H1079.82V1.90909H1092.6L1152.26 87.7756H1153.33V1.90909H1166.33ZM1186.79 13.6278V1.90909H1268.61V13.6278H1234.31V111H1221.1V13.6278H1186.79ZM64.8693 211.182C64.2301 205.784 61.6378 201.594 57.0923 198.611C52.5469 195.628 46.9716 194.136 40.3665 194.136C35.5369 194.136 31.3111 194.918 27.6889 196.48C24.1023 198.043 21.2969 200.191 19.2727 202.925C17.2841 205.66 16.2898 208.767 16.2898 212.247C16.2898 215.159 16.9822 217.663 18.3672 219.758C19.7876 221.817 21.5987 223.54 23.8004 224.925C26.0021 226.274 28.3104 227.393 30.7251 228.281C33.1399 229.133 35.3594 229.825 37.3835 230.358L48.4631 233.341C51.304 234.087 54.4645 235.116 57.9446 236.43C61.4602 237.744 64.8161 239.538 68.0121 241.81C71.2436 244.048 73.907 246.924 76.0021 250.44C78.0973 253.955 79.1449 258.27 79.1449 263.384C79.1449 269.278 77.6001 274.605 74.5107 279.364C71.4567 284.122 66.9822 287.904 61.0874 290.71C55.228 293.515 48.108 294.918 39.7273 294.918C31.9148 294.918 25.1499 293.657 19.4325 291.136C13.7507 288.614 9.27628 285.099 6.00923 280.589C2.7777 276.079 0.948864 270.841 0.522728 264.875H14.1591C14.5142 268.994 15.8991 272.403 18.3139 275.102C20.7642 277.766 23.8537 279.754 27.5824 281.068C31.3466 282.347 35.3949 282.986 39.7273 282.986C44.7699 282.986 49.2976 282.169 53.3104 280.536C57.3232 278.866 60.5014 276.558 62.8452 273.611C65.1889 270.628 66.3608 267.148 66.3608 263.17C66.3608 259.548 65.3487 256.601 63.3246 254.328C61.3004 252.055 58.6371 250.209 55.3345 248.788C52.032 247.368 48.4631 246.125 44.6278 245.06L31.2045 241.224C22.6818 238.774 15.9347 235.276 10.9631 230.731C5.99148 226.185 3.50568 220.237 3.50568 212.886C3.50568 206.778 5.15696 201.452 8.45952 196.906C11.7976 192.325 16.272 188.774 21.8828 186.253C27.5291 183.696 33.8324 182.418 40.7926 182.418C47.8239 182.418 54.0739 183.678 59.5426 186.2C65.0114 188.685 69.3438 192.094 72.5398 196.427C75.7713 200.759 77.4759 205.678 77.6534 211.182H64.8693ZM94.8986 195.628V183.909H176.717V195.628H142.413V293H129.203V195.628H94.8986ZM284.609 238.455C284.609 249.96 282.532 259.903 278.377 268.284C274.222 276.665 268.523 283.128 261.278 287.673C254.034 292.219 245.76 294.491 236.456 294.491C227.152 294.491 218.878 292.219 211.633 287.673C204.389 283.128 198.689 276.665 194.535 268.284C190.38 259.903 188.302 249.96 188.302 238.455C188.302 226.949 190.38 217.006 194.535 208.625C198.689 200.244 204.389 193.781 211.633 189.236C218.878 184.69 227.152 182.418 236.456 182.418C245.76 182.418 254.034 184.69 261.278 189.236C268.523 193.781 274.222 200.244 278.377 208.625C282.532 217.006 284.609 226.949 284.609 238.455ZM271.825 238.455C271.825 229.009 270.245 221.036 267.084 214.538C263.959 208.039 259.716 203.121 254.354 199.783C249.027 196.445 243.061 194.776 236.456 194.776C229.851 194.776 223.867 196.445 218.505 199.783C213.178 203.121 208.934 208.039 205.774 214.538C202.649 221.036 201.086 229.009 201.086 238.455C201.086 247.901 202.649 255.873 205.774 262.371C208.934 268.87 213.178 273.788 218.505 277.126C223.867 280.464 229.851 282.134 236.456 282.134C243.061 282.134 249.027 280.464 254.354 277.126C259.716 273.788 263.959 268.87 267.084 262.371C270.245 255.873 271.825 247.901 271.825 238.455ZM306.822 293V183.909H343.682C352.205 183.909 359.201 185.365 364.67 188.277C370.138 191.153 374.187 195.113 376.814 200.156C379.442 205.198 380.756 210.933 380.756 217.361C380.756 223.788 379.442 229.488 376.814 234.46C374.187 239.431 370.156 243.337 364.723 246.178C359.29 248.984 352.347 250.386 343.895 250.386H314.066V238.455H343.469C349.293 238.455 353.981 237.602 357.532 235.898C361.118 234.193 363.711 231.778 365.309 228.653C366.942 225.493 367.759 221.729 367.759 217.361C367.759 212.993 366.942 209.175 365.309 205.908C363.675 202.641 361.065 200.12 357.479 198.344C353.892 196.533 349.151 195.628 343.256 195.628H320.032V293H306.822ZM358.171 243.994L385.018 293H369.677L343.256 243.994H358.171ZM407.243 293H393.394L433.451 183.909H447.087L487.144 293H473.294L440.695 201.168H439.843L407.243 293ZM412.357 250.386H468.181V262.105H412.357V250.386ZM573.583 218C572.411 214.413 570.866 211.2 568.949 208.359C567.067 205.482 564.812 203.032 562.184 201.008C559.591 198.984 556.644 197.439 553.341 196.374C550.039 195.308 546.417 194.776 542.475 194.776C536.012 194.776 530.135 196.445 524.844 199.783C519.552 203.121 515.344 208.039 512.219 214.538C509.094 221.036 507.532 229.009 507.532 238.455C507.532 247.901 509.112 255.873 512.273 262.371C515.433 268.87 519.712 273.788 525.11 277.126C530.508 280.464 536.58 282.134 543.327 282.134C549.577 282.134 555.082 280.802 559.84 278.138C564.634 275.44 568.363 271.64 571.026 266.739C573.725 261.803 575.074 255.997 575.074 249.321L579.123 250.173H546.31V238.455H587.858V250.173C587.858 259.158 585.941 266.97 582.106 273.611C578.306 280.251 573.05 285.401 566.339 289.058C559.662 292.68 551.992 294.491 543.327 294.491C533.668 294.491 525.181 292.219 517.866 287.673C510.586 283.128 504.904 276.665 500.82 268.284C496.772 259.903 494.748 249.96 494.748 238.455C494.748 229.825 495.902 222.066 498.21 215.177C500.554 208.252 503.856 202.357 508.118 197.492C512.379 192.627 517.422 188.898 523.246 186.306C529.069 183.714 535.479 182.418 542.475 182.418C548.228 182.418 553.59 183.288 558.562 185.028C563.569 186.732 568.025 189.165 571.932 192.325C575.873 195.45 579.158 199.197 581.786 203.565C584.414 207.897 586.225 212.709 587.219 218H573.583ZM610.484 293V183.909H676.322V195.628H623.694V232.489H672.913V244.207H623.694V281.281H677.174V293H610.484Z" fill="black"/>
      </svg>
      <hr
        css={css`
          border: 1px solid #939393;
          margin: 1rem 0;
        `}
      />
      <div
        css={css`
          display: flex;
          flex-flow: row wrap;

          @media screen and (min-width: 768px) {
          }
        `}
      >
        {complimentList.map((compliment, idx) => <Card key={compliment.content} compliment={compliment} id={idx} />)}
      </div>
      <FloatingActionButton />
    </>
  );
}
