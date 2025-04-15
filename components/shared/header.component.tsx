// interface HeaderProps {
// 	children: React.ReactNode;
// }

export function Header() {
	return (
		<>
			<div className="h-[72px] bg-red-500">
				<div className="container mx-auto h-full">
					<div></div>
					<div>
						<nav>
							<a href="#">Home</a>
							<a href="#">Categories</a>
						</nav>
					</div>
				</div>
			</div>
		</>
	);
}
