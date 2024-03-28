const themes = {
    defaultDark: {
        color1: '#8c3838',
        color2: '#8a8c38',
        color3: '#388c6e',
        color4: '#477f9e',
        color5: '#8c3889',
        color6: '#49388c',
        background: '#2b3133',
        mainText: '#9b9898',
        secondaryText: '#545454',
        inputText: '#b4b3b3',
        inputBackground: '#252a2a',
        nav: '#252a2a'
    },
    lunarGlow: {
        color1: '#BF3D55',
        color2: '#8C3874',
        color3: '#B14B2A',
        color4: '#B1865F',
        color5: '#3C8A95',
        color6: '#5B59A3',
        background: '#2A3C42',
        mainText: '#FFFFFF',
        secondaryText: '#5F7B7C',
        inputText: '#B4B3B3',
        inputBackground: '#2B313B',
        nav: '#243236',
        glow: '#ABDDE0'
    },
    coral: {
        color1: '#42B8D1',
        color2: '#2BD0C6',
        color3: '#39DBA1',
        color4: '#E16C81',
        color5: '#E78768',
        color6: '#D995D2',
        background: '#A6BFC8',
        mainText: '#FFFFFF',
        secondaryText: '#E0EEEF',
        inputText: '#C9D9DE',
        inputBackground: '#758EA5',
        nav: '#86969C'
    },
    cyberpunk: {
        color1: '#BE285E',
        color2: '#F98F13',
        color3: '#C5534B',
        color4: '#716362',
        color5: '#7E3C95',
        color6: '#5453AB',
        background: '#0C0C0C',
        mainText: '#C5423A',
        secondaryText: '#8E4D4D',
        inputText: '#C9D9DE',
        inputBackground: '#30131C',
        nav: '#290B1D'
    },
    cherry: {
        color1: '#D9ABE0',
        color2: '#B25E9B',
        color3: '#845ABB',
        color4: '#5FA3B1',
        color5: '#0C6774',
        color6: '#6A69A8',
        background: '#1A2535',
        mainText: '#D9ABE0',
        secondaryText: '#7C5F79',
        inputText: '#B4B3B3',
        inputBackground: '#543D58',
        nav: '#151D28'
    },
    hacker: {
        color1: '#1d8231',
        color2: '#00FF7F',
        color3: '#40E0D0',
        color4: '#32CD32',
        color5: '#00FA9A',
        color6: '#98FB98',
        background: '#000000',
        mainText: '#00FF00',
        secondaryText: '#008000',
        inputText: '#00FF7F',
        inputBackground: '#001400',
        nav: '#001F00',
        glow: '#00FF00',
        glow2: 'rgba(0, 255, 0, 0.5)'
    },
    cyberpunk2077: {
        color1: '#BE285E',
        color2: '#F98F13',
        color3: '#C5534B',
        color4: '#716362',
        color5: '#7E3C95',
        color6: '#5453AB',
        background: '#1e3261',
        mainText: '#70f3ff',
        secondaryText: '#ff3b68',
        inputText: '#C9D9DE',
        inputBackground: '#30131C',
        nav: '#290B1D'
    },
    neon: {
        color1: '#FF00FF',
        color2: '#00FFFF',
        color3: '#FFFF00',
        color4: '#FF69B4',
        color5: '#7CFC00',
        color6: '#FFD700',
        background: '#000000',
        mainText: '#FFFFFF',
        secondaryText: '#D3D3D3',
        inputText: '#FFFF00',
        inputBackground: '#191970',
        nav: '#4B0082'
    },
    pastelDreams: {
        color1: '#FFC0CB',
        color2: '#FFD700',
        color3: '#87CEEB',
        color4: '#FFA07A',
        color5: '#98FB98',
        color6: '#DDA0DD',
        background: '#F0F8FF',
        mainText: '#000000',
        secondaryText: '#696969',
        inputText: '#A9A9A9',
        inputBackground: '#F5F5F5',
        nav: '#D3D3D3'
    },
    oceanBreeze: {
        color1: '#87CEEB',
        color2: '#4682B4',
        color3: '#B0C4DE',
        color4: '#AFEEEE',
        color5: '#F0FFFF',
        color6: '#ADD8E6',
        background: '#F0F8FF',
        mainText: '#000000',
        secondaryText: '#708090',
        inputText: '#778899',
        inputBackground: '#F0FFFF',
        nav: '#B0E0E6'
    },
    vaporwave: {
        color1: '#FF6AC1',
        color2: '#AC7EFF',
        color3: '#7D56FF',
        color4: '#00FFA3',
        color5: '#FFD700',
        color6: '#FF7F50',
        background: '#17002D',
        mainText: '#FFFFFF',
        secondaryText: '#C0C0C0',
        inputText: '#FF69B4',
        inputBackground: '#4B0082',
        nav: '#9400D3'
    },
    enchantedForest: {
        color1: '#228B22',
        color2: '#8B4513',
        color3: '#8FBC8F',
        color4: '#556B2F',
        color5: '#32CD32',
        color6: '#BDB76B',
        background: '#2E8B57',
        mainText: '#FFFFFF',
        secondaryText: '#A0522D',
        inputText: '#8B008B',
        inputBackground: '#6B8E23',
        nav: '#3CB371'
    },
    fireAndIce: {
        color1: '#FF4500',
        color2: '#1E90FF',
        color3: '#FF1493',
        color4: '#4169E1',
        color5: '#FF8C00',
        color6: '#00BFFF',
        background: '#000000',
        mainText: '#FFFFFF',
        secondaryText: '#B0C4DE',
        inputText: '#FFD700',
        inputBackground: '#FF4500',
        nav: '#4682B4'
    },
    desertSunset: {
        color1: '#FFD700',
        color2: '#FF4500',
        color3: '#FFA07A',
        color4: '#FF6347',
        color5: '#FF8C00',
        color6: '#FF7F50',
        background: '#FFDAB9',
        mainText: '#8B4513',
        secondaryText: '#CD853F',
        inputText: '#DAA520',
        inputBackground: '#F4A460',
        nav: '#FFA500'
    },
    midnightSky: {
        color1: '#4169E1',
        color2: '#483D8B',
        color3: '#1E90FF',
        color4: '#191970',
        color5: '#00008B',
        color6: '#0000CD',
        background: '#191970',
        mainText: '#FFFFFF',
        secondaryText: '#B0E0E6',
        inputText: '#ADD8E6',
        inputBackground: '#00BFFF',
        nav: '#4682B4'
    }
};

export default themes;
