import * as React from 'react';
import axios from 'axios';
import { serverUrl } from '../../helpers/Constants';

interface IFormContainerProps {
    updateReloadeState: () => void
}

const FormContainer: React.FunctionComponent<IFormContainerProps> = (props) => {
    const { updateReloadeState } = props;

    const [fullUrl, setFullUrl] = React.useState<string>("");


    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            await axios.post(`${serverUrl}/shorturl`, {
                fullUrl: fullUrl,
            });
            setFullUrl("");
            updateReloadeState();
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <section className="container mx-auto p-2">
            <div className="bg-banner my-8 rounded-xl bg-cover p-4 text-white text-center">
                <h2 className="text-4xl">URL Shortner</h2>
                <h3 className=" py-2 text-lg font-extralight">Paste untidy link to shorten it</h3>
                <p className="text-sm">Free tool that shorten a large URL so that share smartly </p>

                <form onSubmit={handleSubmit}>
                    <div className="flex w-3/4 mx-auto my-6">
                        <div className="relative w-full ">
                            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none z-10 text-gray-700 font-semibold">urlshortner.link/</div>

                            <input type="text" name="fullUrl" className=" w-full py-3 text-sm text-gray-900 border border-gray-300 ps-32 pe-36 rounded-lg bg-white focus:ring-blue-500 focus:border-blue-500 " placeholder="Paste URL" required
                                value={fullUrl}
                                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setFullUrl(e.target.value)}
                            />

                            <button type="submit" className="bg-slate-600 absolute top-0 end-0 text-lg h-full px-8 rounded-lg">Save</button>
                        </div>
                    </div>
                </form>
            </div>
        </section>
    )
};

export default FormContainer;
