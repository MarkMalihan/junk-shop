import { ArrowUp } from "lucide-react";
import { Button } from "./button";

type ReturnToTopButtonProps = {
	show: boolean;
	onClick: () => void;
};

export default function ReturnToTopButton({
	show,
	onClick,
}: ReturnToTopButtonProps) {
	return (
		<Button
			size="icon"
			className={`sticky bottom-12 mt-4 self-end rounded-full shadow-lg transition-opacity ${show ? "opacity-100" : "opacity-0"
				}`}
			onClick={onClick}
			aria-label="Return to top">
			<ArrowUp className="size-4" />
		</Button>
	);
}
