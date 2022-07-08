const Name = () => {
    return (
        <div className="flex flex-row text-white text-4xl" onClick={jumpHome}>
            <p className={pclassName}>J</p>
            <p className={pclassName}>i</p>
            <p className={pclassName}>a</p>
            <p className={pclassName}>l</p>
            <p className={pclassName}>i</p>
            <p className={pclassName}>n</p>
            <p>&nbsp;</p>
            <p className={pclassName}>W</p>
            <p className={pclassName}>a</p>
            <p className={pclassName}>n</p>
            <p className={pclassName}>g</p>
            
        </div>
    );
}

const jumpHome = () => {
    window.location.href = "/";
}

const pclassName = "select-none transition ease-in-out duration-200 hover:-translate-y-2";

export default Name;