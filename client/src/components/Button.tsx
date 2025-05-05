import { JSX, ParentProps } from "solid-js";

const Button = (props: ParentProps & JSX.HTMLAttributes<HTMLDivElement>) => {
    return (
        <div {...props} class="flex justify-center items-center flex-grow-0 flex-shrink-0 relative gap-2.5 px-4 py-2 rounded-[5px] bg-[#4b3995] hover:bg-[#3a2e6f] cursor-pointer select-none">
            <p class="flex-grow-0 flex-shrink-0 text-white">
                {props.children}
            </p>
        </div>
    );
};

export default Button;
