import PropTypes from 'prop-types';


function Card({ name, about }) {
    return (
        <figure className="md:flex bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-slate-800">

            <img className="w-24 h-24 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto" src="https://pbs.twimg.com/profile_images/1587400003042955264/IqtSwJpj_400x400.jpg" alt="" width="384" height="512" />

            <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
                <blockquote>
                    <p className="text-lg font-medium">
                        &ldquo;Tailwind CSS is the only framework that I&apos;ve seen scale
                        on large teams. It&rsquo;s easy to customize, adapts to any design,
                        and the build size is tiny.&rdquo;
                    </p>
                </blockquote>
                <figcaption className="font-medium">

                    <div className="text-sky-500 dark:text-sky-400">
                        {name}
                    </div>

                    <div className="text-slate-700 dark:text-slate-500">
                        {about}
                    </div>
                </figcaption>
            </div>
        </figure>
    )
}

Card.propTypes = {
    name: PropTypes.string,
    about: PropTypes.string.isRequired,
};

Card.defaultProps = { // settind default props
    name: 'hi',
};

export default Card;



