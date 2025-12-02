import type { t__Props } from "./type";

const urls = [
  [
    ["sample1-1.com", "sample1-2.example.com"],
  ],
  [
    ["sample2-1.com", "sample2-2.example.com"],
  ],
  [
    ["sample3-1.com", "sample3-2.example.com"],
  ]
];

const missions =[
  [
    ["1-1適切なcookieを設定して、example.comにアクセスしてください。", "1-2適切なcookieを設定して、example.comにアクセスしてください。"],
  ],
  [
    ["2-1適切なcookieを設定して、example.comにアクセスしてください。", "2-2適切なcookieを設定して、example.comにアクセスしてください。"],
  ],
  [
    ["3-1適切なcookieを設定して、example.comにアクセスしてください。", "3-2適切なcookieを設定して、example.comにアクセスしてください。"],
  ]
];


const Preview: React.FC<t__Props> = ({level, step}) => {
  return (
    <section>
      <h2 className="sr-only">プレビュー画面</h2>
      <div className="flex column">
        <div className="flex items-center align-center">
          <div>
            <h3 className="sr-only">URL</h3>
            <p><span>https://</span>{urls[level][step]}</p>
          </div>
        </div>
        <div>
          <h3>
            <span aria-hidden="true">Mission</span>
            <span className="sr-only">ミッション</span>
          </h3>
          <p>{missions[level][step]}</p>
        </div>
      </div>
    </section>
  );
}


export default Preview;