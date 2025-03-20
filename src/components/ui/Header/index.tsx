import { useState } from 'react';
import { currencyList } from '../../../data/Currency';
import { lang } from '../../../data/lang';
import { DropDownMenu } from '../Drop-down-menu';
import styles from './header.module.css';
import { Button } from '../Button';

const Header = () => {
  const [selectedCurrency, setSelectedCurrency] = useState(currencyList[0]);
  const [selectedLang, setSelectedLang] = useState(lang[0]);
  localStorage.setItem('lang', selectedLang.name);
  const getLangLocal = localStorage.getItem('lang');

  return (
    <header className={styles.header}>
      <div>
        <div className={styles.headerWrapper}>
          <div className={styles.logo}></div>
          <nav className={styles.headerNavigation}>
            <DropDownMenu
              items={currencyList}
              selectedItem={selectedCurrency}
              onSelect={setSelectedCurrency}
            />
            <DropDownMenu
              items={lang}
              selectedItem={selectedLang}
              onSelect={setSelectedLang}
            />

            <Button className={styles.currenLang}>
              {getLangLocal === 'EN' ? lang[0].icon : lang[1].icon}
            </Button>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
