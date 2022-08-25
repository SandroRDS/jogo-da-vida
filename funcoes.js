var modoAutomatico = false, modoAutomaticoInterval, implantacaoArrastavel = false;
var abaPadroes = false;

var linhasLetras = {
        1   : "A",
        2   : "B",
        3   : "C",
        4   : "D",
        5   : "E",
        6   : "F",
        7   : "G",
        8   : "H",
        9   : "I",
        10  : "J",
        11  : "K",
        12  : "L",
        13  : "M",
        14  : "N",
        15  : "O",
        16  : "P",
        17  : "Q",
        18  : "R",
        19  : "S",
        20  : "T",
        21  : "U",
        22  : "V",
        23  : "W",
        24  : "X",
        25  : "Y"
        }

var linhasNumeros = {
        "A" : 1,
        "B" : 2,
        "C" : 3,
        "D" : 4,
        "E" : 5,
        "F" : 6,
        "G" : 7,
        "H" : 8,
        "I" : 9,
        "J" : 10,
        "K" : 11,
        "L" : 12,
        "M" : 13,
        "N" : 14,
        "O" : 15,
        "P" : 16,
        "Q" : 17,
        "R" : 18,
        "S" : 19,
        "T" : 20,
        "U" : 21,
        "V" : 22,
        "W" : 23,
        "X" : 24,
        "Y" : 25
        }

var celulasVivas = {

        "A1" : false, "A2" : false, "A3" : false, "A4" : false, "A5" : false, "A6" : false, "A7" : false, "A8" : false, "A9" : false, "A10" : false, "A11" : false, "A12" : false, "A13" : false, "A14" : false, "A15" : false, "A16" : false, "A17" : false, "A18" : false, "A19" : false, "A20" : false, "A21" : false, "A22" : false, "A23" : false, "A24" : false, "A25" : false,
        "B1" : false, "B2" : false, "B3" : false, "B4" : false, "B5" : false, "B6" : false, "B7" : false, "B8" : false, "B9" : false, "B10" : false, "B11" : false, "B12" : false, "B13" : false, "B14" : false, "B15" : false, "B16" : false, "B17" : false, "B18" : false, "B19" : false, "B20" : false, "B21" : false, "B22" : false, "B23" : false, "B24" : false, "B25" : false,
        "C1" : false, "C2" : false, "C3" : false, "C4" : false, "C5" : false, "C6" : false, "C7" : false, "C8" : false, "C9" : false, "C10" : false, "C11" : false, "C12" : false, "C13" : false, "C14" : false, "C15" : false, "C16" : false, "C17" : false, "C18" : false, "C19" : false, "C20" : false, "C21" : false, "C22" : false, "C23" : false, "C24" : false, "C25" : false,
        "D1" : false, "D2" : false, "D3" : false, "D4" : false, "D5" : false, "D6" : false, "D7" : false, "D8" : false, "D9" : false, "D10" : false, "D11" : false, "D12" : false, "D13" : false, "D14" : false, "D15" : false, "D16" : false, "D17" : false, "D18" : false, "D19" : false, "D20" : false, "D21" : false, "D22" : false, "D23" : false, "D24" : false, "D25" : false,
        "E1" : false, "E2" : false, "E3" : false, "E4" : false, "E5" : false, "E6" : false, "E7" : false, "E8" : false, "E9" : false, "E10" : false, "E11" : false, "E12" : false, "E13" : false, "E14" : false, "E15" : false, "E16" : false, "E17" : false, "E18" : false, "E19" : false, "E20" : false, "E21" : false, "E22" : false, "E23" : false, "E24" : false, "E25" : false,
        "F1" : false, "F2" : false, "F3" : false, "F4" : false, "F5" : false, "F6" : false, "F7" : false, "F8" : false, "F9" : false, "F10" : false, "F11" : false, "F12" : false, "F13" : false, "F14" : false, "F15" : false, "F16" : false, "F17" : false, "F18" : false, "F19" : false, "F20" : false, "F21" : false, "F22" : false, "F23" : false, "F24" : false, "F25" : false,
        "G1" : false, "G2" : false, "G3" : false, "G4" : false, "G5" : false, "G6" : false, "G7" : false, "G8" : false, "G9" : false, "G10" : false, "G11" : false, "G12" : false, "G13" : false, "G14" : false, "G15" : false, "G16" : false, "G17" : false, "G18" : false, "G19" : false, "G20" : false, "G21" : false, "G22" : false, "G23" : false, "G24" : false, "G25" : false,
        "H1" : false, "H2" : false, "H3" : false, "H4" : false, "H5" : false, "H6" : false, "H7" : false, "H8" : false, "H9" : false, "H10" : false, "H11" : false, "H12" : false, "H13" : false, "H14" : false, "H15" : false, "H16" : false, "H17" : false, "H18" : false, "H19" : false, "H20" : false, "H21" : false, "H22" : false, "H23" : false, "H24" : false, "H25" : false,
        "I1" : false, "I2" : false, "I3" : false, "I4" : false, "I5" : false, "I6" : false, "I7" : false, "I8" : false, "I9" : false, "I10" : false, "I11" : false, "I12" : false, "I13" : false, "I14" : false, "I15" : false, "I16" : false, "I17" : false, "I18" : false, "I19" : false, "I20" : false, "I21" : false, "I22" : false, "I23" : false, "I24" : false, "I25" : false,
        "J1" : false, "J2" : false, "J3" : false, "J4" : false, "J5" : false, "J6" : false, "J7" : false, "J8" : false, "J9" : false, "J10" : false, "J11" : false, "J12" : false, "J13" : false, "J14" : false, "J15" : false, "J16" : false, "J17" : false, "J18" : false, "J19" : false, "J20" : false, "J21" : false, "J22" : false, "J23" : false, "J24" : false, "J25" : false,
        "K1" : false, "K2" : false, "K3" : false, "K4" : false, "K5" : false, "K6" : false, "K7" : false, "K8" : false, "K9" : false, "K10" : false, "K11" : false, "K12" : false, "K13" : false, "K14" : false, "K15" : false, "K16" : false, "K17" : false, "K18" : false, "K19" : false, "K20" : false, "K21" : false, "K22" : false, "K23" : false, "K24" : false, "K25" : false,
        "L1" : false, "L2" : false, "L3" : false, "L4" : false, "L5" : false, "L6" : false, "L7" : false, "L8" : false, "L9" : false, "L10" : false, "L11" : false, "L12" : false, "L13" : false, "L14" : false, "L15" : false, "L16" : false, "L17" : false, "L18" : false, "L19" : false, "L20" : false, "L21" : false, "L22" : false, "L23" : false, "L24" : false, "L25" : false,
        "M1" : false, "M2" : false, "M3" : false, "M4" : false, "M5" : false, "M6" : false, "M7" : false, "M8" : false, "M9" : false, "M10" : false, "M11" : false, "M12" : false, "M13" : false, "M14" : false, "M15" : false, "M16" : false, "M17" : false, "M18" : false, "M19" : false, "M20" : false, "M21" : false, "M22" : false, "M23" : false, "M24" : false, "M25" : false,
        "N1" : false, "N2" : false, "N3" : false, "N4" : false, "N5" : false, "N6" : false, "N7" : false, "N8" : false, "N9" : false, "N10" : false, "N11" : false, "N12" : false, "N13" : false, "N14" : false, "N15" : false, "N16" : false, "N17" : false, "N18" : false, "N19" : false, "N20" : false, "N21" : false, "N22" : false, "N23" : false, "N24" : false, "N25" : false,
        "O1" : false, "O2" : false, "O3" : false, "O4" : false, "O5" : false, "O6" : false, "O7" : false, "O8" : false, "O9" : false, "O10" : false, "O11" : false, "O12" : false, "O13" : false, "O14" : false, "O15" : false, "O16" : false, "O17" : false, "O18" : false, "O19" : false, "O20" : false, "O21" : false, "O22" : false, "O23" : false, "O24" : false, "O25" : false,
        "P1" : false, "P2" : false, "P3" : false, "P4" : false, "P5" : false, "P6" : false, "P7" : false, "P8" : false, "P9" : false, "P10" : false, "P11" : false, "P12" : false, "P13" : false, "P14" : false, "P15" : false, "P16" : false, "P17" : false, "P18" : false, "P19" : false, "P20" : false, "P21" : false, "P22" : false, "P23" : false, "P24" : false, "P25" : false,
        "Q1" : false, "Q2" : false, "Q3" : false, "Q4" : false, "Q5" : false, "Q6" : false, "Q7" : false, "Q8" : false, "Q9" : false, "Q10" : false, "Q11" : false, "Q12" : false, "Q13" : false, "Q14" : false, "Q15" : false, "Q16" : false, "Q17" : false, "Q18" : false, "Q19" : false, "Q20" : false, "Q21" : false, "Q22" : false, "Q23" : false, "Q24" : false, "Q25" : false,
        "R1" : false, "R2" : false, "R3" : false, "R4" : false, "R5" : false, "R6" : false, "R7" : false, "R8" : false, "R9" : false, "R10" : false, "R11" : false, "R12" : false, "R13" : false, "R14" : false, "R15" : false, "R16" : false, "R17" : false, "R18" : false, "R19" : false, "R20" : false, "R21" : false, "R22" : false, "R23" : false, "R24" : false, "R25" : false,
        "S1" : false, "S2" : false, "S3" : false, "S4" : false, "S5" : false, "S6" : false, "S7" : false, "S8" : false, "S9" : false, "S10" : false, "S11" : false, "S12" : false, "S13" : false, "S14" : false, "S15" : false, "S16" : false, "S17" : false, "S18" : false, "S19" : false, "S20" : false, "S21" : false, "S22" : false, "S23" : false, "S24" : false, "S25" : false,
        "T1" : false, "T2" : false, "T3" : false, "T4" : false, "T5" : false, "T6" : false, "T7" : false, "T8" : false, "T9" : false, "T10" : false, "T11" : false, "T12" : false, "T13" : false, "T14" : false, "T15" : false, "T16" : false, "T17" : false, "T18" : false, "T19" : false, "T20" : false, "T21" : false, "T22" : false, "T23" : false, "T24" : false, "T25" : false,
        "U1" : false, "U2" : false, "U3" : false, "U4" : false, "U5" : false, "U6" : false, "U7" : false, "U8" : false, "U9" : false, "U10" : false, "U11" : false, "U12" : false, "U13" : false, "U14" : false, "U15" : false, "U16" : false, "U17" : false, "U18" : false, "U19" : false, "U20" : false, "U21" : false, "U22" : false, "U23" : false, "U24" : false, "U25" : false,
        "V1" : false, "V2" : false, "V3" : false, "V4" : false, "V5" : false, "V6" : false, "V7" : false, "V8" : false, "V9" : false, "V10" : false, "V11" : false, "V12" : false, "V13" : false, "V14" : false, "V15" : false, "V16" : false, "V17" : false, "V18" : false, "V19" : false, "V20" : false, "V21" : false, "V22" : false, "V23" : false, "V24" : false, "V25" : false,
        "W1" : false, "W2" : false, "W3" : false, "W4" : false, "W5" : false, "W6" : false, "W7" : false, "W8" : false, "W9" : false, "W10" : false, "W11" : false, "W12" : false, "W13" : false, "W14" : false, "W15" : false, "W16" : false, "W17" : false, "W18" : false, "W19" : false, "W20" : false, "W21" : false, "W22" : false, "W23" : false, "W24" : false, "W25" : false,
        "X1" : false, "X2" : false, "X3" : false, "X4" : false, "X5" : false, "X6" : false, "X7" : false, "X8" : false, "X9" : false, "X10" : false, "X11" : false, "X12" : false, "X13" : false, "X14" : false, "X15" : false, "X16" : false, "X17" : false, "X18" : false, "X19" : false, "X20" : false, "X21" : false, "X22" : false, "X23" : false, "X24" : false, "X25" : false,
        "Y1" : false, "Y2" : false, "Y3" : false, "Y4" : false, "Y5" : false, "Y6" : false, "Y7" : false, "Y8" : false, "Y9" : false, "Y10" : false, "Y11" : false, "Y12" : false, "Y13" : false, "Y14" : false, "Y15" : false, "Y16" : false, "Y17" : false, "Y18" : false, "Y19" : false, "Y20" : false, "Y21" : false, "Y22" : false, "Y23" : false, "Y24" : false, "Y25" : false
        }

var celulasVivasStatement = {

        "A1" : false, "A2" : false, "A3" : false, "A4" : false, "A5" : false, "A6" : false, "A7" : false, "A8" : false, "A9" : false, "A10" : false, "A11" : false, "A12" : false, "A13" : false, "A14" : false, "A15" : false, "A16" : false, "A17" : false, "A18" : false, "A19" : false, "A20" : false, "A21" : false, "A22" : false, "A23" : false, "A24" : false, "A25" : false,
        "B1" : false, "B2" : false, "B3" : false, "B4" : false, "B5" : false, "B6" : false, "B7" : false, "B8" : false, "B9" : false, "B10" : false, "B11" : false, "B12" : false, "B13" : false, "B14" : false, "B15" : false, "B16" : false, "B17" : false, "B18" : false, "B19" : false, "B20" : false, "B21" : false, "B22" : false, "B23" : false, "B24" : false, "B25" : false,
        "C1" : false, "C2" : false, "C3" : false, "C4" : false, "C5" : false, "C6" : false, "C7" : false, "C8" : false, "C9" : false, "C10" : false, "C11" : false, "C12" : false, "C13" : false, "C14" : false, "C15" : false, "C16" : false, "C17" : false, "C18" : false, "C19" : false, "C20" : false, "C21" : false, "C22" : false, "C23" : false, "C24" : false, "C25" : false,
        "D1" : false, "D2" : false, "D3" : false, "D4" : false, "D5" : false, "D6" : false, "D7" : false, "D8" : false, "D9" : false, "D10" : false, "D11" : false, "D12" : false, "D13" : false, "D14" : false, "D15" : false, "D16" : false, "D17" : false, "D18" : false, "D19" : false, "D20" : false, "D21" : false, "D22" : false, "D23" : false, "D24" : false, "D25" : false,
        "E1" : false, "E2" : false, "E3" : false, "E4" : false, "E5" : false, "E6" : false, "E7" : false, "E8" : false, "E9" : false, "E10" : false, "E11" : false, "E12" : false, "E13" : false, "E14" : false, "E15" : false, "E16" : false, "E17" : false, "E18" : false, "E19" : false, "E20" : false, "E21" : false, "E22" : false, "E23" : false, "E24" : false, "E25" : false,
        "F1" : false, "F2" : false, "F3" : false, "F4" : false, "F5" : false, "F6" : false, "F7" : false, "F8" : false, "F9" : false, "F10" : false, "F11" : false, "F12" : false, "F13" : false, "F14" : false, "F15" : false, "F16" : false, "F17" : false, "F18" : false, "F19" : false, "F20" : false, "F21" : false, "F22" : false, "F23" : false, "F24" : false, "F25" : false,
        "G1" : false, "G2" : false, "G3" : false, "G4" : false, "G5" : false, "G6" : false, "G7" : false, "G8" : false, "G9" : false, "G10" : false, "G11" : false, "G12" : false, "G13" : false, "G14" : false, "G15" : false, "G16" : false, "G17" : false, "G18" : false, "G19" : false, "G20" : false, "G21" : false, "G22" : false, "G23" : false, "G24" : false, "G25" : false,
        "H1" : false, "H2" : false, "H3" : false, "H4" : false, "H5" : false, "H6" : false, "H7" : false, "H8" : false, "H9" : false, "H10" : false, "H11" : false, "H12" : false, "H13" : false, "H14" : false, "H15" : false, "H16" : false, "H17" : false, "H18" : false, "H19" : false, "H20" : false, "H21" : false, "H22" : false, "H23" : false, "H24" : false, "H25" : false,
        "I1" : false, "I2" : false, "I3" : false, "I4" : false, "I5" : false, "I6" : false, "I7" : false, "I8" : false, "I9" : false, "I10" : false, "I11" : false, "I12" : false, "I13" : false, "I14" : false, "I15" : false, "I16" : false, "I17" : false, "I18" : false, "I19" : false, "I20" : false, "I21" : false, "I22" : false, "I23" : false, "I24" : false, "I25" : false,
        "J1" : false, "J2" : false, "J3" : false, "J4" : false, "J5" : false, "J6" : false, "J7" : false, "J8" : false, "J9" : false, "J10" : false, "J11" : false, "J12" : false, "J13" : false, "J14" : false, "J15" : false, "J16" : false, "J17" : false, "J18" : false, "J19" : false, "J20" : false, "J21" : false, "J22" : false, "J23" : false, "J24" : false, "J25" : false,
        "K1" : false, "K2" : false, "K3" : false, "K4" : false, "K5" : false, "K6" : false, "K7" : false, "K8" : false, "K9" : false, "K10" : false, "K11" : false, "K12" : false, "K13" : false, "K14" : false, "K15" : false, "K16" : false, "K17" : false, "K18" : false, "K19" : false, "K20" : false, "K21" : false, "K22" : false, "K23" : false, "K24" : false, "K25" : false,
        "L1" : false, "L2" : false, "L3" : false, "L4" : false, "L5" : false, "L6" : false, "L7" : false, "L8" : false, "L9" : false, "L10" : false, "L11" : false, "L12" : false, "L13" : false, "L14" : false, "L15" : false, "L16" : false, "L17" : false, "L18" : false, "L19" : false, "L20" : false, "L21" : false, "L22" : false, "L23" : false, "L24" : false, "L25" : false,
        "M1" : false, "M2" : false, "M3" : false, "M4" : false, "M5" : false, "M6" : false, "M7" : false, "M8" : false, "M9" : false, "M10" : false, "M11" : false, "M12" : false, "M13" : false, "M14" : false, "M15" : false, "M16" : false, "M17" : false, "M18" : false, "M19" : false, "M20" : false, "M21" : false, "M22" : false, "M23" : false, "M24" : false, "M25" : false,
        "N1" : false, "N2" : false, "N3" : false, "N4" : false, "N5" : false, "N6" : false, "N7" : false, "N8" : false, "N9" : false, "N10" : false, "N11" : false, "N12" : false, "N13" : false, "N14" : false, "N15" : false, "N16" : false, "N17" : false, "N18" : false, "N19" : false, "N20" : false, "N21" : false, "N22" : false, "N23" : false, "N24" : false, "N25" : false,
        "O1" : false, "O2" : false, "O3" : false, "O4" : false, "O5" : false, "O6" : false, "O7" : false, "O8" : false, "O9" : false, "O10" : false, "O11" : false, "O12" : false, "O13" : false, "O14" : false, "O15" : false, "O16" : false, "O17" : false, "O18" : false, "O19" : false, "O20" : false, "O21" : false, "O22" : false, "O23" : false, "O24" : false, "O25" : false,
        "P1" : false, "P2" : false, "P3" : false, "P4" : false, "P5" : false, "P6" : false, "P7" : false, "P8" : false, "P9" : false, "P10" : false, "P11" : false, "P12" : false, "P13" : false, "P14" : false, "P15" : false, "P16" : false, "P17" : false, "P18" : false, "P19" : false, "P20" : false, "P21" : false, "P22" : false, "P23" : false, "P24" : false, "P25" : false,
        "Q1" : false, "Q2" : false, "Q3" : false, "Q4" : false, "Q5" : false, "Q6" : false, "Q7" : false, "Q8" : false, "Q9" : false, "Q10" : false, "Q11" : false, "Q12" : false, "Q13" : false, "Q14" : false, "Q15" : false, "Q16" : false, "Q17" : false, "Q18" : false, "Q19" : false, "Q20" : false, "Q21" : false, "Q22" : false, "Q23" : false, "Q24" : false, "Q25" : false,
        "R1" : false, "R2" : false, "R3" : false, "R4" : false, "R5" : false, "R6" : false, "R7" : false, "R8" : false, "R9" : false, "R10" : false, "R11" : false, "R12" : false, "R13" : false, "R14" : false, "R15" : false, "R16" : false, "R17" : false, "R18" : false, "R19" : false, "R20" : false, "R21" : false, "R22" : false, "R23" : false, "R24" : false, "R25" : false,
        "S1" : false, "S2" : false, "S3" : false, "S4" : false, "S5" : false, "S6" : false, "S7" : false, "S8" : false, "S9" : false, "S10" : false, "S11" : false, "S12" : false, "S13" : false, "S14" : false, "S15" : false, "S16" : false, "S17" : false, "S18" : false, "S19" : false, "S20" : false, "S21" : false, "S22" : false, "S23" : false, "S24" : false, "S25" : false,
        "T1" : false, "T2" : false, "T3" : false, "T4" : false, "T5" : false, "T6" : false, "T7" : false, "T8" : false, "T9" : false, "T10" : false, "T11" : false, "T12" : false, "T13" : false, "T14" : false, "T15" : false, "T16" : false, "T17" : false, "T18" : false, "T19" : false, "T20" : false, "T21" : false, "T22" : false, "T23" : false, "T24" : false, "T25" : false,
        "U1" : false, "U2" : false, "U3" : false, "U4" : false, "U5" : false, "U6" : false, "U7" : false, "U8" : false, "U9" : false, "U10" : false, "U11" : false, "U12" : false, "U13" : false, "U14" : false, "U15" : false, "U16" : false, "U17" : false, "U18" : false, "U19" : false, "U20" : false, "U21" : false, "U22" : false, "U23" : false, "U24" : false, "U25" : false,
        "V1" : false, "V2" : false, "V3" : false, "V4" : false, "V5" : false, "V6" : false, "V7" : false, "V8" : false, "V9" : false, "V10" : false, "V11" : false, "V12" : false, "V13" : false, "V14" : false, "V15" : false, "V16" : false, "V17" : false, "V18" : false, "V19" : false, "V20" : false, "V21" : false, "V22" : false, "V23" : false, "V24" : false, "V25" : false,
        "W1" : false, "W2" : false, "W3" : false, "W4" : false, "W5" : false, "W6" : false, "W7" : false, "W8" : false, "W9" : false, "W10" : false, "W11" : false, "W12" : false, "W13" : false, "W14" : false, "W15" : false, "W16" : false, "W17" : false, "W18" : false, "W19" : false, "W20" : false, "W21" : false, "W22" : false, "W23" : false, "W24" : false, "W25" : false,
        "X1" : false, "X2" : false, "X3" : false, "X4" : false, "X5" : false, "X6" : false, "X7" : false, "X8" : false, "X9" : false, "X10" : false, "X11" : false, "X12" : false, "X13" : false, "X14" : false, "X15" : false, "X16" : false, "X17" : false, "X18" : false, "X19" : false, "X20" : false, "X21" : false, "X22" : false, "X23" : false, "X24" : false, "X25" : false,
        "Y1" : false, "Y2" : false, "Y3" : false, "Y4" : false, "Y5" : false, "Y6" : false, "Y7" : false, "Y8" : false, "Y9" : false, "Y10" : false, "Y11" : false, "Y12" : false, "Y13" : false, "Y14" : false, "Y15" : false, "Y16" : false, "Y17" : false, "Y18" : false, "Y19" : false, "Y20" : false, "Y21" : false, "Y22" : false, "Y23" : false, "Y24" : false, "Y25" : false  
        }


function passarGeracao()
{
    for(var i = 1; i <= 25; i++)
    {
        for(var j = 1; j <= 25; j++)
        {
            var coordenadaAtual = linhasLetras[i] + j;
            var coordenadasAoRedor = identificarCoordenadasArredores(coordenadaAtual);
            var quantidadeCelulasVivasAoRedor = identificarQuantidadeCelulasVivas(coordenadasAoRedor);

            if(!celulasVivas[coordenadaAtual])
            {
                if(quantidadeCelulasVivasAoRedor == 3)
                {
                    celulasVivasStatement[coordenadaAtual] = true;
                    console.log(`reviveu ${coordenadaAtual}`);
                }
            }
            else
            {
                if((quantidadeCelulasVivasAoRedor < 2) || (quantidadeCelulasVivasAoRedor > 3))
                {
                    celulasVivasStatement[coordenadaAtual] = false;
                    console.log(`matou ${coordenadaAtual}`);
                }
            }
        }
    }

    transcreverStatement();
    atualizarQuadro();
}

function transcreverStatement()
{
    for(var i = 1; i <= 25; i++)
    {
        for(var j = 1; j <= 25; j++)
        {
            var coordenadaAtual = linhasLetras[i] + j;

            celulasVivas[coordenadaAtual] = celulasVivasStatement[coordenadaAtual];
        }
    }
}

function identificarQuantidadeCelulasVivas(coordenadasAoRedor)
{
    var quantidadeCelulasVivas = 0;
    
    for(var i = 0; i < coordenadasAoRedor.length; i++)
    {
        var coordenadaAtual = coordenadasAoRedor[i];

        if(celulasVivas[coordenadaAtual])
        {
            quantidadeCelulasVivas++;
        }
    }

    return quantidadeCelulasVivas;
}

function identificarCoordenadasArredores(id)
{
    var posicaoCentral = id.split('');
    var linhaCentral = posicaoCentral[0], colunaCentral = posicaoCentral[1];
    var coordenadasArredores = [];

    if(posicaoCentral.length == 3)
    {
        colunaCentral += posicaoCentral[2];
    }

    var linhaNorte = linhasLetras[linhasNumeros[linhaCentral] - 1];
    var linhaSul = linhasLetras[linhasNumeros[linhaCentral] + 1];
    var colunaLeste = parseInt(colunaCentral) + 1 <= 25 ? parseInt(colunaCentral) + 1 : undefined;
    var colunaOeste = parseInt(colunaCentral) - 1 >= 1 ? parseInt(colunaCentral) - 1 : undefined;
    var leste, oeste;

    if(linhaNorte != undefined)
    {
        var norte = linhaNorte + colunaCentral;
        coordenadasArredores.push(norte);

        if(colunaLeste != undefined)
        {
            var nordeste = linhaNorte + colunaLeste;
            var leste = linhaCentral + colunaLeste;
            coordenadasArredores.push(nordeste);
        }

        if(colunaOeste != undefined)
        {
            var noroeste = linhaNorte + colunaOeste;
            var oeste = linhaCentral + colunaOeste; 
            coordenadasArredores.push(noroeste);
        }
    }
    
    if(linhaSul != undefined)
    {
        var sul = linhaSul + colunaCentral;
        coordenadasArredores.push(sul);

        if(colunaLeste != undefined)
        {
            var sudeste = linhaSul + colunaLeste;
            var leste = linhaCentral + colunaLeste;
            coordenadasArredores.push(sudeste);
        }

        if(colunaOeste != undefined)
        {
            var sudoeste = linhaSul + colunaOeste;
            var oeste = linhaCentral + colunaOeste; 
            coordenadasArredores.push(sudoeste);
        }
    }

    if(leste != undefined)
    {
        coordenadasArredores.push(leste);
    }

    if(oeste != undefined)
    {
        coordenadasArredores.push(oeste);
    }

    return coordenadasArredores;
}

function atualizarQuadro()
{
    for(var i = 1; i <= 25; i++)
    {
        for(var j = 1; j <= 25; j++)
        {
            var coordenada = linhasLetras[i]+j;

            if(celulasVivas[coordenada])
            {
                reviverCelula(coordenada);   
            }
            else
            {
                matarCelula(coordenada);
            }
        }
    }
}

function reviverCelula(id)
{
    var coordenada = id;

    document.getElementById(coordenada).style.background = "#1a6c15";
}

function matarCelula(id)
{
    var coordenada = id;

    celulasVivas[id] = false;
    document.getElementById(coordenada).style.background = "#fff";
}

function implantarCelula(evento)
{
    var coordenada = evento.target.id;
    console.log(coordenada);

    celulasVivas[coordenada] = true;
    celulasVivasStatement[coordenada] = true;
    reviverCelula(coordenada);
}

function implantarCelulaArrastando(evento)
{
    var coordenada = evento.target.id;
    
    if(implantacaoArrastavel)
    {
        console.log(coordenada);
        celulasVivas[coordenada] = true;
        celulasVivasStatement[coordenada] = true;
        reviverCelula(coordenada);
    }
}


function retirarCelula(evento)
{
    var coordenada = evento.target.id;

    celulasVivas[coordenada] = false;
    celulasVivasStatement[coordenada] = false;
    matarCelula(coordenada);

    return false;
}

function limparTela()
{
    for(var i = 1; i <= 25; i++)
    {
        for(var j = 1; j <= 25; j++)
        {
            var coordenada = linhasLetras[i] + j;

            celulasVivas[coordenada] = false;
            celulasVivasStatement[coordenada] = false;
            matarCelula(coordenada);
        }
    }

    modoAutomatico = true;
    ativarModoAutomatico();
}

function ativarModoAutomatico()
{
    if(modoAutomatico)
    {
        modoAutomatico = false;
        document.getElementById("imagem_play").src = "img/play.png";
        document.getElementById("skip").onclick = passarGeracao;
        document.getElementById("skip").style.opacity = "100%";
        clearInterval(modoAutomaticoInterval);
    }
    else
    {
        modoAutomatico = true;
        var velocidade = document.querySelector("input[name='velocidade']:checked").value;
        var tempoDuracao = 1000 / velocidade;
        console.log(velocidade);
        document.getElementById("imagem_play").src = "img/pause.png";
        document.getElementById("skip").onclick = "";
        document.getElementById("skip").style.opacity = "70%";
        modoAutomaticoInterval = setInterval(passarGeracao, tempoDuracao);
    }
}

function iniciarJogo()
{
    ativarModoAutomatico();
    document.getElementById("play").onclick = ativarModoAutomatico;
    document.getElementById("skip").style.display = "inline-block";
    document.getElementById("reset").style.display = "inline-block";
}

function exibirPadroes()
{
    var padroes = document.querySelector("#padroes_div");
    
    if(abaPadroes)
    {
        padroes.style.transform = "scale(0)";
        abaPadroes = false;
    }
    else
    {
        padroes.style.transform = "scale(1)";
        abaPadroes = true;
    }
}

function selecionarPadrao(numero)
{
    var coordenadasPadrao = [];

    for(var i = 1; i <= 25; i++)
    {
        for(var j = 1; j <= 25; j++)
        {
            var coordenada = linhasLetras[i] + j;

            celulasVivas[coordenada] = false;
            celulasVivasStatement[coordenada] = false;
        }
    }

    switch(numero)
    {
        case 1:
            coordenadasPadrao.push("M12","M13","N12","N13");
            break;

        case 2:
            coordenadasPadrao.push("L12","L13","M14","N13","N12","M11");
            break;

        case 3:
            coordenadasPadrao.push("K12","K13","L14","M14","N13","M12","L11");
            break;

        case 4:
            coordenadasPadrao.push("M11","L11","L12","N12","M13");
            break;

        case 5:
            coordenadasPadrao.push("M12","M13","M14");
            break;

        case 6:
            coordenadasPadrao.push("M12","M13","M14","N11","N12","N13");
            break;
            
        case 7:
            coordenadasPadrao.push("L11","M11","L12","O13","O14","N14");
            break;

        case 8:
            coordenadasPadrao.push("G8","G9","H9","H10","I9","J10","I11","J11","K11","L10","L9","K9","L8","J8","J7","J6","K7","I6","I13","J13","K13","J14","L14","K15","L15","L16","J16","J17","K17","J18","I18","I15","H15","H14","G15","G16","N8","N9","N10","O9","P8","P7","O7","P6","O11","P11","P10","Q11","Q9","R9","S9","R10","Q6","S8","N14","N15","N16","O15","P14","P13","O13","Q13","P16","O17","P17","P18","R14","Q15","R15","S15","S16","Q18");
            break;

        case 9:
            coordenadasPadrao.push("N12","N13","N14","M14","L13");
            break;

        case 10:
            coordenadasPadrao.push("K11","M11","N12","N13","N14","N15","M15","L15","K14");
            break;
    }

    for(var i = 0; i < coordenadasPadrao.length; i++)
    {
        celulasVivas[coordenadasPadrao[i]] = true;
        celulasVivasStatement[coordenadasPadrao[i]] = true;
    }

    atualizarQuadro();
}

for(var i = 1; i <= 25; i++)
{
    for(var j = 1; j <= 25; j++)
    {
        document.getElementById(linhasLetras[i] + j).onclick = implantarCelula;
        document.getElementById(linhasLetras[i] + j).oncontextmenu = retirarCelula;
        document.getElementById(linhasLetras[i] + j).onmousemove = implantarCelulaArrastando;

        document.getElementById(linhasLetras[i] + j).onmousedown = function(){
            implantacaoArrastavel = true;
        }

        document.getElementById(linhasLetras[i] + j).onmouseup = function(){
            implantacaoArrastavel = false;
        }

        document.getElementById("grid").onmouseleave = function(){
            implantacaoArrastavel = false;
        }
    }
}

document.getElementById("play").onclick = iniciarJogo;
document.getElementById("skip").onclick = passarGeracao;
document.getElementById("reset").onclick = limparTela;
document.getElementById("padroes_botao").onclick = exibirPadroes;