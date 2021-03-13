export function generateExcaliLink(){
    let url = "https://excalidraw.com/#room=";
    //[0-9a-f]{20},[a-zA-Z0-9_-]{22}
    let roomId = "", encryption="";
    const charCodesRoomId = [
        ...Array.from({length: 10}, (_, i) => i + 48),
        ...Array.from({length: 6}, (_, i) => i + 97)
    ]
    const charCodesEncryption = [
        ...Array.from({length: 26}, (_, i) => i + 97),
        ...Array.from({length: 26}, (_, i) => i + 65),
        ...Array.from({length: 10}, (_, i) => i + 48),
        95,45
    ]
    for (let i = 0; i < 20; i++) {
        const index = parseInt(Math.random()*charCodesRoomId.length);
        const character = String.fromCharCode(charCodesRoomId[index]);
        console.log({index, character})
        roomId += character;
    }
    for (let i = 0; i < 22; i++) {
        const index = parseInt(Math.random()*charCodesEncryption.length)
        encryption += String.fromCharCode(charCodesEncryption[index]);
    }
    url += roomId + "," + encryption;
    return url;
}