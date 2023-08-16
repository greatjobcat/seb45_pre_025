import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import Category from './Category';

const Header = () => {
  const [isMenuDropdown, setIsMenuDropdown] = useState(false);
  const [isSearchDropdown, setIsSearchDropdown] = useState(false);

  // 메뉴 아이콘이 특정 사이트에서는 block / none 처리되는 상태
  const [isHideMenu, setIsHideMenu] = useState(true);

  const hideMenu = () => {
    setIsHideMenu(false);
  };

  const showMenu = () => {
    setIsHideMenu(true);
  };

  const menuDropdown = () => {
    setIsMenuDropdown((prevState) => !prevState);
  };
  const inputDropdown = () => {
    setIsSearchDropdown((prevState) => !prevState);
  };

  const menuRef = useRef(null);
  const inputRef = useRef(null);
  const menuButtonRef = useRef(null);

  useEffect(() => {
    const closeMenuDropdown = (e) => {
      if (
        menuRef.current !== null &&
        !menuRef.current.contains(e.target) &&
        !menuButtonRef.current.contains(e.target)
      ) {
        setIsMenuDropdown(false);
      }
    };

    if (isMenuDropdown) {
      window.addEventListener('mousedown', closeMenuDropdown);
    }
    return () => {
      window.removeEventListener('mousedown', closeMenuDropdown);
    };
  }, [isMenuDropdown]);

  useEffect(() => {
    const closeSearchDropdown = (e) => {
      if (inputRef.current !== null && !inputRef.current.contains(e.target)) {
        setIsSearchDropdown(false);
      }
    };

    if (isSearchDropdown) {
      window.addEventListener('mousedown', closeSearchDropdown);
    }

    return () => {
      window.removeEventListener('mousedown', closeSearchDropdown);
    };
  }, [isSearchDropdown]);

  return (
    <header className="z-50 bg-white w-full h-14 fixed border-b border-t-[3px] border-t-orange-400 px-2">
      <div className="h-full max-w-full w-[80rem] flex items-center justify-center mx-auto my-0">
        {/* 카테고리 메뉴 아이콘 */}
        {isHideMenu && (
          <div>
            {isMenuDropdown && (
              <Category
                setIsMenuDropdown={setIsMenuDropdown}
                hideMenu={hideMenu}
              />
            )}
            <button
              className="h-full flex items-center justify-center px-2"
              onClick={menuDropdown}
              ref={menuButtonRef}
            >
              <img
                src={isMenuDropdown ? '/images/close.png' : '/images/menu.png'}
                alt={isMenuDropdown ? '메뉴 아이콘' : '닫기 아이콘'}
                className="h-6 w-6 my-3.5"
              />
            </button>
          </div>
        )}

        {/* 로고 아이콘 */}
        {/* 로고 아이콘 눌렀을때 로그인전 메인으로 이동할 수 있는 상태 */}
        <Link to="/" onClick={showMenu}>
          <div className="h-full flex items-center cursor-pointer">
            <svg
              aria-hidden="true"
              className="native svg-icon iconLogoMd px-2"
              width="150"
              height="30"
              viewBox="0 0 187 37"
            >
              <path
                d="m42 23-2.2-.2c-1.7-.1-2.3-.8-2.3-2 0-1.4 1-2.2 3-2.2 1.3-.1 2.6.3 3.6 1.1l1.3-1.3c-1.4-1-3.1-1.5-4.8-1.4-2.9 0-4.9 1.5-4.9 3.9 0 2.2 1.4 3.4 4 3.6l2.2.2c1.6.1 2.2.8 2.2 2 0 1.6-1.4 2.4-3.6 2.4-1.6.1-3.1-.5-4.2-1.6L35 28.8c1.5 1.4 3.5 2 5.5 1.9 3.2 0 5.5-1.5 5.5-4.1 0-2.6-1.6-3.4-4-3.6Zm15.8-6.1c-2.2 0-3.5.4-4.7 1.9l1.3 1.3c.8-1.1 2.1-1.7 3.4-1.5 2.5 0 3.4 1 3.4 2.9v1.3h-4c-3 0-4.6 1.5-4.6 3.9 0 1 .3 2 1 2.7.8.9 1.9 1.2 3.8 1.2 1.4.1 2.9-.4 3.9-1.4v1.3h2v-9.1c-.1-2.9-1.9-4.5-5.5-4.5Zm3.4 8.9c.1.8-.1 1.7-.7 2.3a4 4 0 0 1-3 .9c-2.1 0-3.1-.7-3.1-2.3 0-1.6 1-2.4 3-2.4h3.8v1.5Zm9.7-7.1c1.2 0 2.4.5 3.1 1.5l1.3-1.3a5.4 5.4 0 0 0-4.4-2c-3.4 0-5.9 2.3-5.9 6.9 0 4.6 2.6 6.9 5.9 6.9 1.7.1 3.3-.7 4.4-2L74 27.4c-.7 1-1.9 1.5-3.1 1.5-1.2.1-2.4-.5-3.1-1.5-.7-1.1-1-2.3-.9-3.6-.1-1.3.2-2.5.9-3.6.7-1 1.9-1.6 3.1-1.5Zm16.8-1.6h-2.4L79.2 23V11.1h-2v19.4h2v-4.9l2.4-2.4 4.5 7.3h2.4l-5.6-8.6 4.8-4.8Zm9.2-.16c-1.6-.1-3.2.5-4.3 1.7-1.3 1.3-1.6 2.9-1.6 5.4 0 2.5.3 4.1 1.6 5.4 1.1 1.1 2.7 1.7 4.3 1.7 1.6.1 3.2-.5 4.3-1.7 1.3-1.3 1.6-2.9 1.6-5.4 0-2.5-.3-4.1-1.6-5.4a5.38 5.38 0 0 0-4.3-1.7Zm1.7 10.5c-.9.8-2.3.8-3.2 0-.7-.7-.8-2-.8-3.4s.1-2.7.8-3.4c.9-.8 2.3-.8 3.2 0 .7.7.8 1.9.8 3.4s-.1 2.7-.8 3.4Zm13.6-10.4-2.8 8.6-2.8-8.6h-3.7l5.2 14h2.7l5.1-14h-3.7Zm9.6-.1c-3.6 0-6.1 2.6-6.1 7.1 0 5.7 3.2 7.2 6.5 7.2 2 .1 4-.7 5.3-2.2l-2.1-2.1c-.8.9-2 1.4-3.2 1.3-1.6.1-3-1.1-3.1-2.7v-.4h8.7v-1.6c.1-3.8-2.1-6.6-6-6.6Zm-2.7 5.8c0-.5.1-1 .3-1.5.4-.9 1.3-1.4 2.3-1.4 1-.1 1.9.5 2.3 1.4.2.5.3 1 .3 1.5h-5.2Zm13.33-4.3v-1.3h-3.4v14h3.5v-8.4c-.1-1.3.8-2.4 2.1-2.6h.2c.7 0 1.4.3 1.8.8l2.6-2.6a4.1 4.1 0 0 0-3.3-1.3c-1.3-.1-2.6.4-3.5 1.4Zm7.6-2.8v15.4h3.5v-11h2.6v-2.7h-2.6v-1.5c-.1-.6.3-1.2.9-1.3h1.6v-3h-2a3.9 3.9 0 0 0-4 3.8v.3Zm20.27 1.3c-1.6-.1-3.2.5-4.3 1.7-1.3 1.3-1.6 2.9-1.6 5.4 0 2.5.3 4.1 1.6 5.4 1.1 1.1 2.7 1.7 4.3 1.7 1.6.1 3.2-.5 4.3-1.7 1.3-1.3 1.6-2.9 1.6-5.4 0-2.5-.3-4.1-1.6-5.4a5.38 5.38 0 0 0-4.3-1.7Zm1.7 10.5c-.9.8-2.3.8-3.2 0-.7-.7-.8-2-.8-3.4s.1-2.7.8-3.4c.9-.8 2.3-.8 3.2 0 .7.7.8 1.9.8 3.4s-.1 2.7-.8 3.4Zm20.7-10.4-2.3 8.6-2.9-8.6H175l-2.8 8.7-2.3-8.6h-3.7l4.3 14h2.9l2.9-8.8 2.9 8.8h3l4.3-14-3.8-.1Zm-31.22 9.8v-15.2h-3.5v15.4a3.8 3.8 0 0 0 3.6 4h2.5v-3h-1.3c-.6.1-1.1-.2-1.3-.8v-.4ZM52.7 17.4H49V13h-2v13.9c0 2 1.1 3.6 3.4 3.6h1.4v-1.7h-1c-1.3 0-1.8-.7-1.8-2v-7.7h1.9l1.8-1.7Z"
                fill="var(--black-800)"
              />
              <path d="M26 33v-9h4v13H0V24h4v9h22Z" fill="#BCBBBB" />
              <path
                d="m23.1 25.99.68-2.95-16.1-3.35L7 23l16.1 2.99ZM9.1 15.2l15 7 1.4-3-15-7-1.4 3Zm4.2-7.4L26 18.4l2.1-2.5L15.4 5.3l-2.1 2.5ZM21.5 0l-2.7 2 9.9 13.3 2.7-2L21.5 0ZM7 30h16v-3H7v3Z"
                fill="#F48024"
              />
            </svg>
          </div>
        </Link>

        {/* About / Products / For Teams */}
        <div className="flex">
          <h1 className="px-3 py-1.5 text-sm text-[#525960] cursor-pointer">
            About
          </h1>
          <h1 className="px-5 py-1.5 text-sm text-[#525960] cursor-pointer">
            Products
          </h1>
          <h1 className="px-3 py-1.5 text-sm text-[#525960] cursor-pointer">
            For Teams
          </h1>
        </div>

        {/* 입력창 */}
        <div className="relative flex grow items-center mx-2 h-7">
          <input
            placeholder="Search..."
            className="border border-zinc-200 py-1 pl-10 rounded-md flex grow text-sm"
            onClick={inputDropdown}
            ref={inputRef}
          />
          <img
            className="absolute left-3 color-[#525960]"
            src="/images/Search-Icon.png"
            alt="검색창"
          />

          {/* 검색창 클릭시 드롭다운 구현 */}
          {isSearchDropdown && (
            <div className="bg-white drop-shadow-sm w-full min-w-max border border-zinc-200 rounded-md flex grow absolute top-10">
              <div className="w-full">
                <div className="flex w-full p-3">
                  <div className="w-full">
                    <div className="flex mb-3">
                      <h1 className="text-black font-Roboto font-medium text-xs tracking-widest mr-1">
                        [tag]
                      </h1>
                      <span className="text-gray-500 text-sm">
                        search within a tag
                      </span>
                    </div>
                    <div className="flex mb-3">
                      <h1 className="text-black font-Roboto font-medium text-xs tracking-widest mr-1">
                        user:1234
                      </h1>
                      <span className="text-gray-500 text-sm">
                        search by author
                      </span>
                    </div>
                    <div className="flex mb-3">
                      <h1 className="text-black font-Roboto font-medium text-xs tracking-widest mr-1">
                        {' '}
                        &ldquo;words here&rdquo;{' '}
                      </h1>
                      <span className="text-gray-500 text-sm">
                        exact phrase
                      </span>
                    </div>
                    <div className="flex">
                      <h1 className="text-black font-Roboto font-medium text-xs tracking-widest mr-1">
                        collective:&ldquo;Name&rdquo;
                      </h1>
                      <span className="text-gray-500 text-sm">
                        collective content
                      </span>
                    </div>
                  </div>
                  <div className="w-full">
                    <div className="flex mb-3">
                      <h1 className="text-black font-Roboto font-medium text-xs tracking-widest mr-1">
                        answers:0
                      </h1>
                      <span className="text-gray-500 text-sm">
                        unanswered questions
                      </span>
                    </div>
                    <div className="flex mb-3">
                      <h1 className="text-black font-Roboto font-medium text-xs tracking-widest mr-1">
                        score:3
                      </h1>
                      <span className="text-gray-500 text-sm">
                        posts with a 3+ score
                      </span>
                    </div>
                    <div className="flex mb-3">
                      <h1 className="text-black font-Roboto font-medium text-xs tracking-widest mr-1">
                        {' '}
                        is:question{' '}
                      </h1>
                      <span className="text-gray-500 text-sm">
                        type of post
                      </span>
                    </div>
                    <div className="flex">
                      <h1 className="text-black font-Roboto font-medium text-xs tracking-widest mr-1">
                        collective:isaccepted:yes
                      </h1>
                      <span className="text-gray-500 text-sm">
                        search within status
                      </span>
                    </div>
                  </div>
                </div>
                <div className="flex justify-between border-t">
                  <button className="bg-blue-100 m-3 p-1.5 rounded-md">
                    <h1 className="text-blue-700 text-xs ">Ask a question</h1>
                  </button>
                  <button className="text-blue-500 text-xs p-3">
                    Search help
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* 로그인 버튼 */}
        <Link to="/login">
          <button className="border border-blue-100 bg-blue-100 px-3 py-1 rounded-md">
            <h1 className="text-sm text-blue-700">Log in</h1>
          </button>
        </Link>

        {/* 회원가입 버튼 */}
        <Link to="/signup">
          <button className="border border-blue-500 bg-blue-500 px-3 py-1 rounded-md ml-1">
            <h1 className="text-sm text-white">Sign up</h1>
          </button>
        </Link>
      </div>
    </header>
  );
};

export default Header;
