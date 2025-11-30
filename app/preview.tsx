import type { t__Props, t__PropChildren } from "./type";

const missions =[
  [
    [
      ["Mission1-1-1 適切なcookieを設定してください。"],
      ["Mission1-1-2 適切なcookieを設定してください。"],
      ["Mission1-1-3 適切なcookieを設定してください。"],
      ["Mission1-1-4 適切なcookieを設定してください。"],
    ],
    [
      ["Mission1-2-1 適切なcookieを設定してください。"],
      ["Mission1-2-2 適切なcookieを設定してください。"],
      ["Mission1-2-3 適切なcookieを設定してください。"],
    ],
  ],
  [
    [
      ["Mission2-1-1 適切なcookieを設定してください。"],
      ["Mission2-1-2 適切なcookieを設定してください。"],
      ["Mission2-1-3 適切なcookieを設定してください。"],
    ],
    [
      ["Mission2-2-1 適切なcookieを設定してください。"],
      ["Mission2-2-2 適切なcookieを設定してください。"],
      ["Mission2-2-3 適切なcookieを設定してください。"],
    ],
  ],
  [
    [
      ["Mission3-1-1 適切なcookieを設定してください。"],
      ["Mission3-1-2 適切なcookieを設定してください。"],
      ["Mission3-1-3 適切なcookieを設定してください。"],
    ],
    [
      ["Mission3-2-1 適切なcookieを設定してください。"],
      ["Mission3-2-2 適切なcookieを設定してください。"],
      ["Mission3-2-3 適切なcookieを設定してください。"]
    ]
  ]
];


const Preview: React.FC<t__Props> = ({level, step}) => {
  return (
    <section>
      <h2 className="sr-only">プレビュー画面</h2>
      <div>
        <div className="flex items-center align-center">
          <div>
            <p><span>https://</span></p>
          </div>
        </div>
      </div>
    </section>
  );
}


export default Preview;