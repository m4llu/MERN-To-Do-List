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
    theBestOne: {
        color1: '#FF0000', // Red
        color2: '#00FF00', // Green
        color3: '#000000', // Black
        color4: '#FFFF00', // Yellow
        color5: '#0000FF', // Blue
        color6: '#FF00FF', // Magenta
        background: '#00FFFF', // Cyan
        mainText: '#FFA500', // Orange
        secondaryText: '#FF69B4', // Hot Pink
        inputText: '#7FFF00', // Chartreuse
        inputBackground: '#8B0000', // Dark Red
        nav: '#9400D3', // Dark Violet
        glow: '#FFD700', // Gold
        glow2: '#00CED1' // Dark Turquoise
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
        color1: '#FF4D6D', // Pink
        color2: '#FF6B9D', // Lighter Pink
        color3: '#FF8BD3', // Light Pink
        color4: '#58EBF7', // Light Cyan
        color5: '#2CD3F2', // Cyan
        color6: '#00A9D5', // Darker Cyan
        background: '#01012b',
        mainText: '#d1f7ff',
        secondaryText: '#ff2a6d',
        inputText: '#C9D9DE',
        inputBackground: '#0c1d38',
        nav: '#0d131f',
        glow: '#05d9e8',
    },
    cyberpunkGrey: {
        color1: '#FF4D6D', // Pink
        color2: '#FF6B9D', // Lighter Pink
        color3: '#FF8BD3', // Light Pink
        color4: '#58EBF7', // Light Cyan
        color5: '#2CD3F2', // Cyan
        color6: '#00A9D5', // Darker Cyan
        background: '#1C1F2A', // Dark Background
        mainText: '#FFFFFF', // White Text
        secondaryText: '#ff2a6d', // Grayish Text
        inputText: '#A5B1BE', // Light Gray Text
        inputBackground: '#2A2F3C', // Darker Input Background
        nav: '#323848', // Navigation Color
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
        color5: '#AAFFFF',
        color6: '#ADD8E6',
        background: '#F0F8FF',
        mainText: '#000000',
        secondaryText: '#708090',
        inputText: '#778899',
        inputBackground: '#F0FFFF',
        nav: '#B0E0E6'
    },
    vaporwave: {
        color1: '#9b30ff', // Purple
        color2: '#763bff', // Purple
        color3: '#4f47ff', // Blue
        color4: '#2761ff', // Blue
        color5: '#007fff', // Blue
        color6: '#0099ff', // Blue
        background: '#17002D', // Dark Purple
        mainText: '#FFFFFF', // White
        secondaryText: '#C0C0C0', // Light Gray
        inputText: '#FF69B4', // Pink
        inputBackground: '#4B0082', // Indigo
        nav: '#9400D3' // Violet
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
    goldenAutumn: {
        color1: '#FFD700',
        color2: '#FFA500',
        color3: '#8B4513',
        color4: '#CD853F',
        color5: '#DAA520',
        color6: '#FF7F50',
        background: '#F4A460',
        mainText: '#8B0000',
        secondaryText: '#A52A2A',
        inputText: '#BC8F8F',
        inputBackground: '#FF4500',
        nav: '#FF6347'
    },
    emeraldOasis: {
        color1: '#2E8B57',
        color2: '#20B2AA',
        color3: '#7FFF00',
        color4: '#32CD32',
        color5: '#00FF7F',
        color6: '#90EE90',
        background: '#F0FFF0',
        mainText: '#006400',
        secondaryText: '#008000',
        inputText: '#228B22',
        inputBackground: '#ADFF2F',
        nav: '#3CB371'
    },
    midnightSky: {
        color1: '#0B0F23',
        color2: '#1C1F37',
        color3: '#2B3561',
        color4: '#374A84',
        color5: '#5271A5',
        color6: '#6F8BC1',
        background: '#0B0F23',
        mainText: '#FFFFFF',
        secondaryText: '#A3A3A3',
        inputText: '#CCCCCC',
        inputBackground: '#2B3561',
        nav: '#1C1F37'
    },
    autumnLeaves: {
        color1: '#A04000',
        color2: '#C95A00',
        color3: '#E76F00',
        color4: '#FF8800',
        color5: '#FFA94D',
        color6: '#FFC477',
        background: '#3D2400',
        mainText: '#FFFFFF',
        secondaryText: '#FFE0B2',
        inputText: '#FFB74D',
        inputBackground: '#6B3900',
        nav: '#1A0E00'
    },
    mysticForest: {
        color1: '#004d00',
        color2: '#006600',
        color3: '#008000',
        color4: '#009900',
        color5: '#00cc00',
        color6: '#99ff99',
        background: '#003300',
        mainText: '#FFFFFF',
        secondaryText: '#C0C0C0',
        inputText: '#80FF80',
        inputBackground: '#004d00',
        nav: '#001a00'
    },
    fierySunrise: {
        color1: '#ff3333',
        color2: '#ff4d4d',
        color3: '#ff6666',
        color4: '#ff8080',
        color5: '#ff9999',
        color6: '#ffb3b3',
        background: '#cc0000',
        mainText: '#FFFFFF',
        secondaryText: '#FFCCCC',
        inputText: '#FF6666',
        inputBackground: '#990000',
        nav: '#660000'
    },
    auroraBorealis: {
        color1: '#2E3D48',
        color2: '#3E6978',
        color3: '#4484A4',
        color4: '#74A9C6',
        color5: '#A6D4E6',
        color6: '#DCEFF6',
        background: '#0D1B23',
        mainText: '#FFFFFF',
        secondaryText: '#B8D4E3',
        inputText: '#B8D4E3',
        inputBackground: '#1C3340',
        nav: '#14323C'
    },
    celestialNebula: {
        color1: '#0D0D0D',
        color2: '#282828',
        color3: '#4C4C4C',
        color4: '#707070',
        color5: '#949494',
        color6: '#B8B8B8',
        background: '#0D0D0D',
        mainText: '#FFFFFF',
        secondaryText: '#CCCCCC',
        inputText: '#999999',
        inputBackground: '#282828',
        nav: '#1A1A1A'
    },
    pastelSunset: {
        color1: '#FFB6C1',
        color2: '#FFDAB9',
        color3: '#FAE5D3',
        color4: '#E0FFFF',
        color5: '#B0E0E6',
        color6: '#FFE4B5',
        background: '#FFECDB',
        mainText: '#8B4513',
        secondaryText: '#FFA07A',
        inputText: '#FF6347',
        inputBackground: '#FFDEAD',
        nav: '#FFB6C1'
    },
    enchantedEvening: {
        color1: '#48284A',
        color2: '#6D4773',
        color3: '#8F6C97',
        color4: '#B093BB',
        color5: '#D0BADF',
        color6: '#F2E0FF',
        background: '#0D0211',
        mainText: '#FFFFFF',
        secondaryText: '#BEBEBE',
        inputText: '#CCCCCC',
        inputBackground: '#28162C',
        nav: '#210E22',
        glow: '#F2E0FF',
    },
    tranquilWaters: {
        color1: '#003366',
        color2: '#0055A4',
        color3: '#6699CC',
        color4: '#AAD4E7',
        color5: '#CCFFFF',
        color6: '#E6F4F1',
        background: '#D4E6F1',
        mainText: '#003366',
        secondaryText: '#6699CC',
        inputText: '#0055A4',
        inputBackground: '#E6F4F1',
        nav: '#0055A4'
    },
    blossomBreeze: {
        color1: '#F88379',
        color2: '#FCD2C2',
        color3: '#F2A490',
        color4: '#FFB6C1',
        color5: '#FFE4E1',
        color6: '#F08080',
        background: '#FCE3DD',
        mainText: '#7C2A28',
        secondaryText: '#FF6347',
        inputText: '#FF4500',
        inputBackground: '#FFC0CB',
        nav: '#F08080'
    },
    moonlitMystery: {
        color1: '#1A1A1A',
        color2: '#333333',
        color3: '#666666',
        color4: '#999999',
        color5: '#CCCCCC',
        color6: '#E6E6E6',
        background: '#0D0D0D',
        mainText: '#CCCCCC',
        secondaryText: '#999999',
        inputText: '#666666',
        inputBackground: '#333333',
        nav: '#1A1A1A'
    }
};

export default themes;
