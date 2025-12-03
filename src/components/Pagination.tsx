import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface PaginationProps {
	currentPage: number;
	totalPages: number;
	onPageChange: (page: number) => void;
}

const Pagination = ({
	currentPage,
	totalPages,
	onPageChange,
}: PaginationProps) => {
	const canGoPrevious = currentPage > 1;
	const canGoNext = currentPage < totalPages;

	return (
		<div className="flex items-center justify-between mt-10 pt-6 border-t border-border">
			<Button
				variant="outline"
				onClick={() => onPageChange(currentPage - 1)}
				disabled={!canGoPrevious}
				className="gap-2"
			>
				<ChevronLeft className="w-4 h-4" />
				Previous
			</Button>

			<div className="flex items-center gap-2">
				{Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
					<Button
						key={page}
						onClick={() => onPageChange(page)}
						className={`w-9 h-9 rounded-lg text-sm font-medium transition-all ${
							page === currentPage
								? "bg-primary text-primary-foreground"
								: "text-muted-foreground hover:bg-accent bg-white hover:text-accent-foreground"
						}`}
					>
						{page}
					</Button>
				))}
			</div>

			<Button
				variant="default"
				onClick={() => onPageChange(currentPage + 1)}
				disabled={!canGoNext}
				className="gap-2"
			>
				Next
				<ChevronRight className="w-4 h-4" />
			</Button>
		</div>
	);
};

export default Pagination;
