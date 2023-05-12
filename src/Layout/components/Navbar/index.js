
import { Link } from "react-router-dom";

const cx = classNames.bind(styles);

function Navbar() {
    return (
        <div className={`nav justify-content-center`}>
            <Link to="#home" className={`nav-link px-2 bg`}>
                TRANG CHỦ
            </Link>

            <Link to="#summary" className={`nav-link px-2 bg`}>
                DÒNG LỊCH SỬ
            </Link>

            <Link to="#share" className={`nav-link px-2 bg`}>
                TƯ LIỆU
            </Link>

            <Link to="#hotnews" className={`nav-link px-2 bg`}>
                NHÂN VẬT
            </Link>

            <Link to="#contact" className={`nav-link px-2 bg`}>
                DI TÍCH
            </Link>
        </div>
    );
}

export default Navbar;
