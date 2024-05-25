

interface IFooterProps {
}

const Footer: React.FunctionComponent<IFooterProps> = () => {
    return (
        <footer className="bg-slate-900">
            <div className="container mx-auto">
                <div className=" text-base text-white py-4 text-center">Footer &copy; URL Shortner</div>
            </div>
        </footer>
    )
};

export default Footer;
