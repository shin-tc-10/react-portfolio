import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();

  // ページが読み込まれたらリダイレクト
  useEffect(() => {
    const redirectTo = window.location.pathname; // アクセスしたパスにリダイレクトする
    navigate(redirectTo);
  }, [navigate]);

  return null; // コンポーネントの中身は空で構いません
};

export default NotFound;
