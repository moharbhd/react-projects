import { ToggleButton, ToggleButtonGroup } from '@mui/material';
import { useTranslation } from 'react-i18next';

export default function LanguageToggle() {
  const { i18n } = useTranslation();
  const currentLang = i18n.language;

  const handleChange = (event, newLang) => {
    if (newLang && newLang !== currentLang) {
      i18n.changeLanguage(newLang).then(() => {
        document.dir = i18n.dir(newLang);
      });
    }
  };
  
  return (
    <div dir={'ltr'} style={{ padding: 20, margin: '0 auto'}}>
      <ToggleButtonGroup
        value={currentLang}
        exclusive
        onChange={handleChange}
        fullWidth
        size='small'
      >
        <ToggleButton value="en">English</ToggleButton>
        <ToggleButton value="ar">عربي</ToggleButton>
      </ToggleButtonGroup>
    </div>
  );
}
