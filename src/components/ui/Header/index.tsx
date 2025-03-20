import { useState, useEffect } from 'react';
import { currencyList } from '../../../data/Currency';
import { lang } from '../../../data/lang';
import { DropDownMenu } from '../Drop-down-menu';
import styles from './header.module.css';
import { Button } from '../Button';

const Header = () => {
  // 1️⃣ Отримуємо збережену мову з `localStorage`
  // Якщо вона є, використовуємо її, якщо ні — беремо першу зі списку `lang`
  const savedLang = localStorage.getItem('lang');
  const initialLang = lang.find((l) => l.name === savedLang) || lang[0];

  // 2️⃣ Створюємо стани для вибраної валюти та мови
  const [selectedCurrency, setSelectedCurrency] = useState(currencyList[0]);
  const [selectedLang, setSelectedLang] = useState(initialLang);

  // 3️⃣ Використовуємо `useEffect`, щоб оновлювати `localStorage` при зміні мови
  useEffect(() => {
    localStorage.setItem('lang', selectedLang.name);
  }, [selectedLang]);

  return (
    <header className={styles.header}>
      <div className={styles.headerWrapper}>
        <div className={styles.logo}></div>
        <nav className={styles.headerNavigation}>
          {/* 4️⃣ Випадаюче меню вибору валюти */}
          <DropDownMenu
            items={currencyList}
            selectedItem={selectedCurrency}
            onSelect={setSelectedCurrency}
          />

          {/* 5️⃣ Випадаюче меню вибору мови */}
          <DropDownMenu
            items={lang}
            selectedItem={selectedLang}
            onSelect={setSelectedLang}
          />

          {/* 6️⃣ Відображення вибраної мови у вигляді кнопки */}
          <Button className={styles.currenLang}>{selectedLang.icon}</Button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
