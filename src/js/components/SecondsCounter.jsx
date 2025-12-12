export default function SecondsCounter({seconds}) {
    // Convertir el número a texto
    let secondsText = seconds.toString();
    
    // Añadir ceros a la izquierda hasta tener 6 dígitos
    while (secondsText.length < 6) {
        secondsText = '0' + secondsText;
    }
    
    // Separar cada dígito en un array
    const digits = secondsText.split('');
    
    return (
        <div className="container d-flex justify-content-center align-items-center mt-3 bg-black">
            <div className="d-flex gap-2">
                {/* {Reloj} */}
                <div className="bg-dark text-white p-3 rounded" style={{fontSize: "48px"}}>
                    <i className="far fa-clock"></i>
                </div>
                
                {/* Los 6 dígitos */}
                {digits.map((digit, index) => (
                    <div key={index} className="bg-dark text-white p-3 rounded text-center" style={{fontSize: "48px", minWidth: "80px"}}>
                        {digit}
                    </div>
                ))}
            </div>
        </div>
    )
}