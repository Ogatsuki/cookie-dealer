export default function Home() {
  return (
    <div className="">
      <header className="flex justify-center">
        <div className="flex max-w-6xl items-center h-[70px]">
          <h1>Cookie Dealer</h1>
          <div>
            <a href="/login">
              <p>ログイン</p>
            </a>
            <a href="/register">
              会員登録
            </a>
          </div>
        </div>
      </header>
    </div>
  );
}
