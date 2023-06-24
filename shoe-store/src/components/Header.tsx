// import getArrayFromStorage from '../utils/arrayFromStorage';
// import { updateCart } from '../store/cartSlice';
// import { useAppDispatch, useAppSelector } from '../store/hooks';
// import { clearSearch } from '../store/searchSlice';
// import FormSearch from './FormSearch';
// import HeaderCart from './HeaderCart';
import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
  // const { search } = useAppSelector((state) => state.searchSlice);
  // const [inputForm, setInputForm] = useState<string>('invisible');
  // const navigate = useNavigate();
  // const dispatch = useAppDispatch();
  // const location = useLocation();

  // useEffect(() => {
  //   const local =  getArrayFromStorage();
  //   dispatch(updateCart(local));
  //   if (location.pathname !== '/catalog' && search !== '') {
  //     dispatch(clearSearch());
  //   } else if (location.pathname === '/catalog') {
  //     setInputForm('invisible');
  //   };
  // }, [dispatch, location.pathname]);

  // function toggleSearch() {
  //   if (inputForm === 'invisible' && location.pathname !== '/catalog') {
  //     setInputForm('');
  //   } else if (inputForm === '' && search !== '' && location.pathname !== '/catalog') {
  //     setInputForm('invisible');
  //     navigate('/catalog');
  //   } else if (inputForm === '' && search === '' && location.pathname !== '/catalog') {
  //     setInputForm('invisible');
  //   };
  // };

  return (
    <header className="container">
      <div className="row">
        <div className="col">

          <nav className="navbar navbar-expand-sm navbar-light bg-light">
            <Link className="navbar-brand" href={"/"}>
              <Image
              src='/images/header-logo.png' width={200} height={200} alt="Bosa Noga"/>
            </Link>
            <div className="collapase navbar-collapse" id="navbarMain">
              <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                  <Link className="nav-link" href={"/"}>Главная</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" href={"/catalog"}>Каталог</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" href={"/about"}>О магазине</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" href={"/contacts"}>Контакты</Link>
                </li>
              </ul>
              {/* <div>
                <div className="header-controls-pics">
                  <div data-id="search-expander" onClick={toggleSearch} className="header-controls-pic header-controls-search"></div>
                  <HeaderCart/>
                </div>
                <FormSearch classStyle={`header-controls-search-form ${inputForm}`}/>
              </div> */}
            </div>
          </nav>

        </div>
      </div>
    </header>
  );
};