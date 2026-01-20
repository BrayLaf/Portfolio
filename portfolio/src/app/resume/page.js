export default function Resume(){
    return(
        <div className="flex flex-col max-w-2xl mx-auto items-center ">
            <section className="flex flex-col w-full">
                <h1 className="text-3xl font-bold text-primary mb-4">My Resume</h1>
                <iframe
                    src="https://drive.google.com/file/d/1j8z8Se-0y5RZE0VK9qTNb_2bWKdS6LvI/preview"
                    className="w-full min-h-screen border-2 border-primary mb-4 rounded-lg"
                    title="Resume PDF"
                >
                </iframe>
            </section>
        </div>
    )
}