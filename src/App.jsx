import Page from "./components/Page";
import PageFlip from "./components/PageFlip";
import "./css/style.css";

function App() {
  return (
    <body>
      {/*Wanted block*/}

      <div class="bg-block">
        {/*Wanted book*/}

        <div class="book">
          {/* Wanted page 1 */}

          <div class="page page-1">
            <div class="page-front front-1">
              <div class="front-content">
                <div>
                  <p>
                    Дело №<span>66644</span>
                  </p>
                </div>

                <div class="personal-file">
                  <p>Личное дело</p>
                  <span>
                    <p>Даниил Коротков</p>
                  </span>
                </div>

                <div>
                  <div class="top-secret">
                    <p>Совершенно</p>
                    <p>Секретно</p>
                  </div>
                  <div class="page-credentials">
                    <p>
                      Дата рождения: <span>26.05</span> <span>2001</span>г
                    </p>
                    <p>
                      Срок офисной работы: <span>6</span> лет/года
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div class="page-back back-1">
              <div class="back-content">
                <h1>Осужден за:</h1>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed
                  nisi ratione officiis odio labore blanditiis ab nesciunt
                  ducimus dolores accusantium. Maxime expedita dignissimos
                  minima praesentium nihil ratione sed quia consectetur. Lorem,
                  ipsum dolor sit amet consectetur adipisicing elit. Sed nisi
                  ratione officiis odio labore blanditiis ab nesciunt ducimus
                  dolores accusantium. Maxime expedita dignissimos minima
                  praesentium nihil ratione sed quia consectetur. Lorem, ipsum
                  dolor sit amet consectetur adipisicing elit. Sed nisi ratione
                  officiis odio labore blanditiis ab nesciunt ducimus dolores
                  accusantium. Maxime expedita dignissimos minima praesentium
                  nihil ratione sed quia consectetur. Lorem, ipsum dolor sit
                  amet consectetur adipisicing elit. Sed nisi ratione officiis
                  odio labore blanditiis ab nesciunt ducimus dolores
                  accusantium. Maxime expedita dignissimos minima praesentium
                  nihil ratione sed quia consectetur. Lorem, ipsum dolor sit
                  amet consectetur adipisicing elit. Sed nisi ratione officiis
                  odio labore blanditiis ab nesciunt ducimus dolores
                  accusantium. Maxime expedita dignissimos minima praesentium
                  nihil ratione sed quia consectetur. Lorem, ipsum dolor sit
                  amet consectetur adipisicing elit. Sed nisi ratione officiis
                  odio labore blanditiis ab nesciunt ducimus dolores
                  accusantium. Maxime expedita dignissimos minima praesentium
                  nihil ratione sed quia consectetur.
                </p>
              </div>
            </div>
          </div>

          {/* Wanted page 2 */}

          <div class="page page-2">
            <div class="page-front front-2">
              <div class="front-content">
                <h1>Фото нарушителя закона</h1>
                <div></div>
              </div>
            </div>

            <div class="page-back">
              <div class="back-content"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Page turn buttons */}

      <div class="page-buttons-container">
        <div class="page-buttons">
          <button class="prev-button">Previous</button>
          {/* Prev button */}

          <button class="next-button">Next</button>
          {/* Next button */}
        </div>
      </div>
    </body>
  );
}

export default App;
