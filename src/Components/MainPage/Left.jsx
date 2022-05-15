import React from "react";
import {  Outlet } from "react-router-dom";

function Left({ setDisplayLeft, displayLeft }) {
  return (
    <div>
      <div
        className="left"
        style={{
          transform:
            displayLeft === true ? "translateX(0)" : "translateX(-100vW)",
          visibility: displayLeft === true ? "visible" : "hidden",
          overflowY: displayLeft === true ? "auto" : "hidden",

          zIndex: "55",
        }}
      >
        <div>
          <div className="header_left">
            <div className="language">RU</div>
            <div className="logo" onClick={() => setDisplayLeft(false)}>
              <img
                src="data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='73' height='22' viewBox='0 0 73 22'%3E%3Cg fill='%23FF4F08' fill-rule='evenodd'%3E%3Cpath d='M9.82 16.035c.016.115.024.21.024.283 0 .074-.091.144-.274.21-.615.18-1.23.295-1.844.344-.615.049-1.138.074-1.57.074-1.43 0-2.45-.3-3.066-.899-.614-.598-.922-1.48-.922-2.645V6.39H.424c-.183 0-.3-.045-.35-.135-.05-.09-.074-.2-.074-.332V4.593c0-.164.02-.275.062-.332.042-.057.154-.11.337-.16l1.844-.418.174-2.313c.017-.197.071-.337.162-.419.092-.082.229-.147.412-.196L5.283.016c.15-.032.27-.016.362.05.091.065.137.196.137.393v3.298h2.741c.183 0 .295.036.337.11.041.074.062.177.062.308v1.747c0 .164-.017.283-.05.357-.033.074-.15.11-.349.11H5.782v6.25c0 .476.12.804.361.985.241.18.603.27 1.084.27.117 0 .258-.008.424-.024l.511-.05c.174-.016.345-.032.51-.049.167-.016.308-.032.425-.049.265-.049.407.033.423.246l.3 2.067zm13.397-.96c0 .214-.029.394-.087.542-.058.148-.203.287-.436.418-.382.18-.793.328-1.234.443-.44.115-.888.205-1.345.27-.457.066-.918.116-1.384.148-.465.033-.905.05-1.32.05-1.13 0-2.065-.107-2.804-.32-.74-.214-1.333-.505-1.782-.874-.449-.369-.764-.804-.947-1.304-.183-.5-.274-1.037-.274-1.612 0-.64.108-1.226.324-1.759.216-.533.54-.997.972-1.39.432-.394.976-.702 1.632-.923.656-.221 1.433-.332 2.33-.332h2.742v-.394c0-.23-.025-.451-.075-.664-.05-.214-.154-.398-.312-.554-.157-.156-.378-.283-.66-.381-.282-.099-.656-.148-1.121-.148-.25 0-.532.012-.848.037-.316.025-.631.057-.947.098-.316.041-.623.09-.922.148-.3.057-.565.119-.797.185-.216.049-.366.049-.45 0-.082-.05-.14-.156-.174-.32L12.9 4.716c-.05-.18-.054-.307-.013-.381.042-.074.129-.136.262-.185.748-.262 1.533-.45 2.355-.566.822-.114 1.64-.172 2.455-.172 1.81 0 3.14.381 3.987 1.144.848.763 1.271 1.89 1.271 3.384v7.136zm-3.553-4.256h-1.97c-.232 0-.48.016-.747.049-.266.033-.51.11-.735.234-.224.123-.411.299-.56.529-.15.23-.225.541-.225.935 0 .574.195.976.586 1.205.39.23.918.345 1.582.345.1 0 .233-.004.399-.012.166-.009.345-.025.536-.05.19-.024.386-.057.585-.098.2-.041.383-.094.549-.16v-2.977zm9.704 10.457c0 .18-.029.296-.087.345-.058.05-.204.074-.436.074h-2.592c-.183 0-.316-.025-.399-.074-.083-.05-.124-.164-.124-.345V5.233c0-.18.029-.324.087-.43.058-.107.195-.218.411-.333.797-.36 1.69-.615 2.68-.763.988-.147 1.93-.221 2.828-.221 1.18 0 2.172.176 2.978.529.806.353 1.454.828 1.944 1.427.49.599.843 1.308 1.06 2.129.215.82.323 1.697.323 2.632 0 .92-.116 1.784-.349 2.596-.232.812-.59 1.522-1.071 2.129-.482.607-1.093 1.087-1.832 1.44-.74.352-1.608.528-2.605.528-.498 0-.96-.02-1.383-.061-.423-.041-.901-.119-1.433-.234v4.675zm4.885-11.146c0-.673-.067-1.239-.2-1.698-.132-.46-.328-.829-.585-1.107-.258-.28-.573-.476-.947-.591-.374-.115-.794-.172-1.259-.172-.232 0-.536.024-.91.074-.373.049-.701.114-.984.196v6.718c.432.115.818.189 1.159.221.34.033.644.05.91.05.83 0 1.507-.28 2.03-.837.524-.558.786-1.51.786-2.854zm10.966 4.626c0 .623-.22 1.148-.66 1.574-.441.427-.985.64-1.633.64-.316 0-.615-.057-.897-.172-.283-.115-.528-.27-.736-.468-.207-.196-.373-.43-.498-.7-.125-.271-.187-.563-.187-.874 0-.312.062-.603.187-.874.125-.27.29-.504.498-.701.208-.197.453-.353.736-.468.282-.115.581-.172.897-.172.648 0 1.192.213 1.632.64.44.426.66.951.66 1.575zm14.106.32c0 .213-.03.393-.088.54-.058.149-.203.288-.436.42-.382.18-.793.327-1.233.442-.44.115-.89.205-1.346.27-.457.066-.918.116-1.383.148-.466.033-.906.05-1.321.05-1.13 0-2.065-.107-2.804-.32-.74-.214-1.333-.505-1.782-.874-.449-.369-.764-.804-.947-1.304-.183-.5-.274-1.037-.274-1.612 0-.64.108-1.226.324-1.759.216-.533.54-.997.972-1.39.432-.394.976-.702 1.632-.923.656-.221 1.433-.332 2.33-.332h2.742v-.394c0-.23-.025-.451-.075-.664-.05-.214-.154-.398-.311-.554-.158-.156-.378-.283-.66-.381-.283-.099-.657-.148-1.122-.148-.25 0-.532.012-.848.037-.315.025-.631.057-.947.098-.315.041-.623.09-.922.148-.299.057-.565.119-.797.185-.216.049-.366.049-.449 0-.083-.05-.141-.156-.174-.32l-.4-1.723c-.05-.18-.053-.307-.012-.381.042-.074.13-.136.262-.185.748-.262 1.533-.45 2.355-.566.823-.114 1.64-.172 2.455-.172 1.811 0 3.14.381 3.988 1.144.847.763 1.27 1.89 1.27 3.384v7.136zm-3.64-4.257h-1.968c-.233 0-.482.016-.748.049-.265.033-.51.11-.735.234-.224.123-.411.299-.56.529-.15.23-.225.541-.225.935 0 .574.195.976.586 1.205.39.23.918.345 1.582.345.1 0 .233-.004.4-.012.165-.009.344-.025.535-.05.191-.024.386-.057.586-.098.199-.041.382-.094.548-.16v-2.977zm17.048-5.217c0 .246-.038.488-.113.726-.074.238-.203.463-.386.677l-5.981 6.643.05.123h6.08c.183 0 .308.03.375.087.066.057.1.176.1.356v1.993c0 .18-.03.304-.088.37-.058.065-.179.098-.361.098h-9.695c-.415 0-.719-.094-.91-.283-.19-.189-.286-.447-.286-.775v-.738c0-.246.037-.492.112-.739.075-.246.237-.508.486-.787l5.956-6.644-.05-.098H62.59c-.2 0-.324-.033-.374-.098-.05-.066-.074-.19-.074-.37V4.224c0-.312.158-.467.473-.467h8.873c.415 0 .726.061.934.184.208.123.312.39.312.8v.861z' transform='translate%28-151 -212%29 translate%280 192%29 translate%28151 20%29'/%3E%3C/g%3E%3C/svg%3E"
                alt=""
              />
            </div>
            <div className="close" onClick={() => setDisplayLeft(false)}>
              <img
                src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNCIgaGVpZ2h0PSIxNCIgdmlld0JveD0iMCAwIDE0IDE0Ij4KICAgIDxwYXRoIGZpbGw9IiNCNkI2QjYiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTEzLjggMS4yTDEyLjYgMCA2LjkgNS43IDEuMiAwIDAgMS4ybDUuNyA1LjdMMCAxMi42bDEuMiAxLjIgNS43LTUuNyA1LjcgNS43IDEuMi0xLjItNS43LTUuN3oiLz4KPC9zdmc+Cg=="
                alt=""
              />
            </div>
          </div>
          <div className="margin"></div>

          <div className="content_left">
            <ul>
              <li>
                <a href="/">
                  <div className="icon">
                    <img
                      src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxOCIgaGVpZ2h0PSIyMCI+PHBhdGggZmlsbD0iI0JDQzBDNCIgZD0iTTE3LjI5OCAxNS40NDFsLS4wNjYuMDhjLTIuMTk0IDIuNjAzLTUuMTE1IDQuMDM4LTguMjI2IDQuMDM4LTMuMTEgMC02LjAzMS0xLjQzNC04LjIyNS00LjAzOWwtLjA2Ni0uMDc5LjAxNS0uMTAxYy40MjQtMi43MzQgMS44NjctNC45MyA0LjA2NS02LjE4NWwuMTU2LS4wODkuMTI1LjEzYTUuNDExIDUuNDExIDAgMCAwIDMuOTMgMS42NyA1LjQxMyA1LjQxMyAwIDAgMCAzLjkzLTEuNjdsLjEyNS0uMTMuMTU2LjA5YzIuMTk4IDEuMjU0IDMuNjQxIDMuNDUgNC4wNjUgNi4xODRsLjAxNi4xMDF6TTkuMDA2IDkuNzY4YzIuNzIyIDAgNC45MzctMi4xOTEgNC45MzctNC44ODRDMTMuOTQzIDIuMTkxIDExLjcyOCAwIDkuMDA2IDAgNi4yODUgMCA0LjA3IDIuMTkxIDQuMDcgNC44ODRjMCAyLjY5MiAyLjIxNSA0Ljg4NCA0LjkzNiA0Ljg4NHoiLz48L3N2Zz4K"
                      alt=""
                    />
                  </div>
                  <p>Giriş</p>
                </a>
              </li>
              <li>
                <a href="/">
                  <div className="icon">
                    <img
                      src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxOCIgaGVpZ2h0PSIxNiI+PHBhdGggZmlsbD0iI0JDQzBDNCIgZD0iTTE3Ljk3IDQuNzcxQzE3LjcwNyAyLjAwNiAxNS42Ni4wMDEgMTMuMS4wMDFjLTEuNzA3IDAtMy4yNy44NzctNC4xNDkgMi4yODVDOC4wOC44NiA2LjU4IDAgNC45MDEgMCAyLjM0IDAgLjI5MiAyLjAwNi4wMyA0Ljc3Yy0uMDIuMTIzLS4xMDYuNzY2LjE1MyAxLjgxNC4zNzMgMS41MTEgMS4yMzUgMi44ODcgMi40OTIgMy45NzVMOC45NDYgMTZsNi4zNzktNS40NGMxLjI1Ny0xLjA5IDIuMTE5LTIuNDY0IDIuNDkyLTMuOTc2LjI1OS0xLjA0OC4xNzQtMS42OS4xNTMtMS44MTN6TTUuNTM4IDIuNjczYy0xLjUyNyAwLTIuNzY5IDEuMTg4LTIuNzY5IDIuNjQ4YS4zMzkuMzM5IDAgMCAxLS4zNDYuMzMxLjMzOS4zMzkgMCAwIDEtLjM0Ni0uMzNjMC0xLjgyNiAxLjU1My0zLjMxIDMuNDYxLTMuMzEuMTkyIDAgLjM0Ny4xNDcuMzQ3LjMzYS4zMzkuMzM5IDAgMCAxLS4zNDcuMzMxeiIvPjwvc3ZnPgo="
                      alt=""
                    />
                  </div>
                  <p>Seçilmişler</p>
                </a>
              </li>
              <li>
                <a href="/">
                  <div className="icon">
                    <img
                      src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxOCIgaGVpZ2h0PSIxNCI+PGcgZmlsbD0iI0JDQzBDNCI+PHBhdGggZD0iTTExLjc1MiA2LjU0NWEyLjMwNSAyLjMwNSAwIDAgMCAyLjI5OCAyLjI5OWgzLjg3NlY0LjI0N2gtMy44OWMtMS4yNTcgMC0yLjI4NCAxLjA0MS0yLjI4NCAyLjI5OHptMy42My0uMDU1YzAgLjY2NS0uNTM2IDEuMi0xLjIwMSAxLjJhMS4xOTggMS4xOTggMCAwIDEtMS4yMDItMS4yYzAtLjY2Ni41MzYtMS4yMDIgMS4yMDItMS4yMDIuNjY1IDAgMS4yLjUzNiAxLjIgMS4yMDJ6Ii8+PHBhdGggZD0iTTE0LjAzNiA5LjU2NWEzLjAyNyAzLjAyNyAwIDAgMS0zLjAyLTMuMDIgMy4wMjcgMy4wMjcgMCAwIDEgMy4wMi0zLjAyaDMuODg2VjEuNzM0QTEuNzEgMS43MSAwIDAgMCAxNi4yMTUuMDI2SDEuNzA3QTEuNzEgMS43MSAwIDAgMCAwIDEuNzMzdjkuNjRjMCAuOTQuNzY2IDEuNzA3IDEuNzA3IDEuNzA3aDE0LjUyNmExLjcxIDEuNzEgMCAwIDAgMS43MDctMS43MDdWOS41NjVoLTMuOTA0eiIvPjwvZz48L3N2Zz4K"
                      alt=""
                    />
                  </div>
                  <p>Balansı Artırın</p>
                </a>
              </li>
            </ul>
            <div className="margin"></div>
            <ul>
              <li>
                <a href="https://tap.az/pages/help">Top 10 sual</a>
              </li>
              <li>
                <a href="https://tap.az/pages/terms-and-conditions">
                  İstifadeci razılaşması
                </a>
              </li>
              <li>
                <a href="https://tap.az/pages/rules">
                  Elan yerlesdırme qaydaları
                </a>
              </li>
              <li>
                <a href="https://tap.az/pages/privacy">Mexfılık sıyasetı</a>
              </li>
              <li>
                <a href="https://tap.az/pages/advertising">Saytda reklam</a>
              </li>
            </ul>
           
          </div>
          <Outlet></Outlet>
        </div>
      </div>
    </div>
  );
}

export default Left;
