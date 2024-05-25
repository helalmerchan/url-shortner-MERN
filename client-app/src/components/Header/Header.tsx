
interface IHeaderProps { }

const Header: React.FunctionComponent<IHeaderProps> = () => {
    return (
        <header className="bg-slate-900">
            <div className="container p-2 mx-auto">
                <nav className="py-5">
                    <div className="text-base text-white">UrlShortner</div>
                </nav>
            </div>
        </header>
    )
};

export default Header;