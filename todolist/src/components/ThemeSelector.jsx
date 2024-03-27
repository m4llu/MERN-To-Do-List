import React from 'react';

function toCamelCase(str) {
    // Convert "camelCase" to "Camel Case"
    return str.replace(/([a-z])([A-Z])/g, '$1 $2').replace(/\b\w/g, c => c.toUpperCase());
}

function ThemeSelector({ themes, changeTheme, theme }) {
    console.log("Themes received in ThemeSelector:", themes);

    return (
        <div>
            <h2 style={{color: theme.mainText, marginBottom: '10px'}}>Select a Theme:</h2>
            <select onChange={(e) => changeTheme(themes[e.target.value])} defaultValue="defaultDark">
                {Object.keys(themes).map((themeName, index) => (
                    <option key={index} value={themeName}>{toCamelCase(themeName)}</option>
                ))}
            </select>
        </div>
    );
}

export default ThemeSelector;