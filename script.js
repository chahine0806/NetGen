accLinks = ['https://exe.io/A6ab2Jjb', 'https://exe.io/grUuFJkp', 'https://exe.io/iIA0ULj', 'https://exe.io/LyYSk7t', 'https://exe.io/zrxqyC', 'https://exe.io/YfR5a', 'https://exe.io/CDB6p', 'https://exe.io/DL2KRvi', 'https://exe.io/lAmn2e', 'https://exe.io/54ggZ', 'https://exe.io/aWJEJ', 'https://exe.io/Rw4Dk', 'https://exe.io/3bfTk', 'https://exe.io/5vX9XvnD', 'https://exe.io/lz94mxtn', 'https://exe.io/pefrD', 'https://exe.io/cPnHDDx', 'https://exe.io/7x8UwXJ', 'https://exe.io/XtKxpbj', 'https://exe.io/ficAnSHz', 'https://exe.io/jVzfnhR', 'https://exe.io/a0WDO', 'https://exe.io/wqip', 'https://exe.io/HZr4icn', 'https://exe.io/PgN7', 'https://exe.io/uCrNnt8', 'https://exe.io/LW16x', 'https://exe.io/EBQZ1DO', 'https://exe.io/Am4wpq', 'https://exe.io/1AQEX', 'https://exe.io/GnJJMo', 'https://exe.io/Pg43ySTI', 'https://exe.io/SWjpt', 'https://exe.io/GaQew', 'https://exe.io/wl832T', 'https://exe.io/pIIRf', 'https://exe.io/aCqn1', 'https://exe.io/06S5jp', 'https://exe.io/onILYb', 'https://exe.io/DgVgFFR', 'https://exe.io/eSy5YZs', 'https://exe.io/GN9uLdZ', 'https://exe.io/kNqY9pY', 'https://exe.io/y3Ej3N', 'https://exe.io/vgH2PYv', 'https://exe.io/lvGUUnsu','https://exe.io/NUOp', 'https://exe.io/LMO4O', 'https://exe.io/sfUtnzT', 'https://exe.io/uRlLd', 'https://exe.io/h8fjKPJ', 'https://exe.io/bZTNBcpz', 'https://exe.io/f9r8H', 'https://exe.io/Rwdpbn', 'https://exe.io/uT53ex', 'https://exe.io/rCTUIybH', 'https://exe.io/dpia', 'https://exe.io/Z8DO4O', 'https://exe.io/reTY5', 'https://exe.io/FzvQun', 'https://exe.io/iKU1Jlvv', 'https://exe.io/D72dy', 'https://exe.io/hDFhOyM', 'https://exe.io/jdNU3', 'https://exe.io/D38mY', 'https://exe.io/Ky7atY8', 'https://exe.io/MFEDEO', 'https://exe.io/RZHhU6M', 'https://exe.io/iFO9VTrG', 'https://exe.io/2ftmXTw', 'https://exe.io/4II8d8T', 'https://exe.io/e2pid6T', 'https://exe.io/xhv4Lh', 'https://exe.io/r4uEn3i', 'https://exe.io/yN2d0iIo', 'https://exe.io/DkQB5', 'https://exe.io/Px5LcyNc', 'https://exe.io/EeaZ42sS', 'https://exe.io/Q1vlp', 'https://exe.io/8yHEw', 'https://exe.io/tfOa', 'https://exe.io/vdmCR9E', 'https://exe.io/Rmxx', 'https://exe.io/8R6zl0', 'https://exe.io/ePyCX', 'https://exe.io/bP8C8Ln', 'https://exe.io/RIr68HMC', 'https://exe.io/McKw84SF', 'https://exe.io/elmPLmON', 'https://exe.io/wdQTyP', 'https://exe.io/SKLT', 'https://exe.io/gtCaSReg', 'https://exe.io/25WX', 'https://exe.io/9tf6ZN3J', 'https://exe.io/Ouv5IE', 'https://exe.io/uM8fJ', 'https://exe.io/HnDhY0', 'https://exe.io/72eESwE3',
 'https://exe.io/lI0nUgXL', 'https://exe.io/EFzW', 'https://exe.io/T1pAz6n0', 'https://exe.io/fHjg8F', 'https://exe.io/aTVDrGF', 'https://exe.io/VITmzj4', 'https://exe.io/GlDKun4', 'https://exe.io/KxhkbU46', 'https://exe.io/SLX4I', 'https://exe.io/KOhngGp', 'https://exe.io/3aBXyxZ', 'https://exe.io/LkfO1NG', 'https://exe.io/wmPRu', 'https://exe.io/p9ZtQY', 'https://exe.io/WYX8Aw3', 'https://exe.io/zxJOPJpz', 'https://exe.io/batVQ', 'https://exe.io/087XV', 'https://exe.io/Hpuwq8IZ', 'https://exe.io/AVCHBi', 'https://exe.io/k1Jvducn', 'https://exe.io/vHtL0f53'];
function genAcc() {
    let numero = Math.floor(Math.random() * (119 - 1 + 1) + 1);
    const span = document.querySelector('span');
    const a = document.createElement('a');
    span.append(a);
    a.innerText = "click here";
    a.setAttribute('href', accLinks[numero])
    let button = document.querySelector('button')
    button.removeAttribute('onclick')
    


};