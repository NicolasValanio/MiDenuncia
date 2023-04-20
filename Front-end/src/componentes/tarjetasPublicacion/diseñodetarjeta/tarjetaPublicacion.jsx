import React from "react";
import Style from "./tarjetaPublicacion.module.css";

function tarjetaPublicacion() {
	return (
		
			<div className={Style.container}>
				<div className={Style.card}>
					<div className={Style.card_header}>
						<div className={Style.user}>
							<div className={Style.userImage}>
								<img src="https://picsum.photos/200/300" alt="" />
							</div>
							<div className={Style.user_info}>
								<span className={Style.user_name}>Rodrigo Puerta</span>
								<span className={Style.user_status}>
									Denuncia por Malla Vial
								</span>
							</div>
						</div>
						<div className={Style.report}>
              <button className={Style.button}> 
							<svg
								xmlns="http://www.w3.org/2000/svg"
								class="icon icon-tabler icon-tabler-flag-filled"
								width="24"
								height="24"
								viewBox="0 0 24 24"
								stroke-width="2"
								stroke="currentColor"
								fill="none"
								stroke-linecap="round"
								stroke-linejoin="round"
							>
								<path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
								<path
									d="M4 5a1 1 0 0 1 .3 -.714a6 6 0 0 1 8.213 -.176l.351 .328a4 4 0 0 0 5.272 0l.249 -.227c.61 -.483 1.527 -.097 1.61 .676l.005 .113v9a1 1 0 0 1 -.3 .714a6 6 0 0 1 -8.213 .176l-.351 -.328a4 4 0 0 0 -5.136 -.114v6.552a1 1 0 0 1 -1.993 .117l-.007 -.117v-16z"
									stroke-width="0"
									fill="currentColor"
								></path>
							</svg>
              </button>
						</div>
					</div>
					<div className={Style.cardBody}>
						<div className={Style.description}>
							<p>
								<span>
									Lorem ipsum dolor sit, amet consectetur adipisicing elit.
									Ducimus dolore est aliquid rem aut qui beatae, quas magnam
									voluptatem. Vitae veritatis tenetur voluptas praesentium culpa
									cupiditate, neque a ab sequi.
								</span>
							</p>
						</div>
						<div className={Style.image}>
              <img src="https://www.eltiempo.com/files/article_main/uploads/2017/03/06/58be391a6b753.jpeg" alt="" />
						</div>
					</div>
					<div className={Style.cardFooter}>
						<div className={Style.info}>
							<p className={Style.published}>Publicado el 05/03/2023</p>
							<div className={Style.location}>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="16"
									height="16"
									fill="currentColor"
									className="bi bi-geo-alt-fill"
									viewBox="0 0 16 16"
								>
									<path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" />
								</svg>
								<span>Comuneros, Bucaramanga</span>
							</div>
							<div className={Style.reactions}>
								<div className={Style.likes}>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										class="icon icon-tabler icon-tabler-heart"
										width="24"
										height="24"
										viewBox="0 0 24 24"
										stroke-width="2"
										stroke="currentColor"
										fill="none"
										stroke-linecap="round"
										stroke-linejoin="round"
									>
										<path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
										<path d="M19.5 12.572l-7.5 7.428l-7.5 -7.428a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572"></path>
									</svg>
									<span>900</span>
								</div>
								<div className={Style.numComments}>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										class="icon icon-tabler icon-tabler-messages"
										width="24"
										height="24"
										viewBox="0 0 24 24"
										stroke-width="2"
										stroke="currentColor"
										fill="none"
										stroke-linecap="round"
										stroke-linejoin="round"
									>
										<path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
										<path d="M21 14l-3 -3h-7a1 1 0 0 1 -1 -1v-6a1 1 0 0 1 1 -1h9a1 1 0 0 1 1 1v10"></path>
										<path d="M14 15v2a1 1 0 0 1 -1 1h-7l-3 3v-10a1 1 0 0 1 1 -1h2"></path>
									</svg>
									<span>900</span>
								</div>
							</div>
						</div>
						<div className={Style.comments}>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								class="icon icon-tabler icon-tabler-message"
								width="24"
								height="24"
								viewBox="0 0 24 24"
								stroke-width="2"
								stroke="currentColor"
								fill="none"
								stroke-linecap="round"
								stroke-linejoin="round"
							>
								<path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
								<path d="M8 9h8"></path>
								<path d="M8 13h6"></path>
								<path d="M18 4a3 3 0 0 1 3 3v8a3 3 0 0 1 -3 3h-5l-5 3v-3h-2a3 3 0 0 1 -3 -3v-8a3 3 0 0 1 3 -3h12z"></path>
							</svg>
						</div>
					</div>
				</div>
			</div>
	
	);
}

export default tarjetaPublicacion;
