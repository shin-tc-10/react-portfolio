import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import LoadingIndicator from "./components/LoadingIndicator";
import React, { useState, useEffect } from "react";

function App() {
  const [loading, setLoading] = useState(true);

  const fetchData = () => {
    // ここに非同期処理を実装する（APIからデータを取得するなど）
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve();
      }, 2000); // 2秒後に非同期処理が完了すると仮定
    });
  };

  useEffect(() => {
    // ロード中の非同期処理などを行う
    // 例えば、APIからデータを取得する場合
    fetchData().then(() => {
      setLoading(false); // ローディングが終了したらfalseに設定
    });
  }, []);

  if (loading) {
    return (
      <div className="overlay">
        <LoadingIndicator />
      </div>
    );
  }

  return (
    <div className="App">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
