<template>
	<div class="w-full">
		<div class="flex items-center justify-end w-full md:justify-between">
			<nav
				class="flex items-center justify-end w-full text-sm uppercase main-menu gap-x-4 lg:gap-x-12 text-primary-dark lg:text-base"
				:class="{ 'hide-mobile-menu': !menuIsOpen }"
			>
				<span
					class="relative text-center md:text-left"
					v-for="{ node } in menu"
					:key="node.key"
					:class="{ parent: node.childItems.edges.length }"
				>
					<g-link v-if="node.path != '?'" class="inline-block" :to="`${node.path}`">{{ node.label }}</g-link>
					<span v-else class="inline-block mb-4 font-semibold md:mb-0">
						{{
							node.label
						}}
					</span>
					<ul v-if="node.childItems.edges.length" class="flex sub-menu" ref="sub-menu">
						<li class="mb-1 md:mb-2.5" v-for="sub in node.childItems.edges" :key="sub.node.id">
							<g-link
								@click="menuIsOpen = false"
								class="md:text-base md:whitespace-nowrap"
								:to="`${sub.node.path}`"
							>{{ sub.node.label }}</g-link>
						</li>
					</ul>
				</span>
				<!-- <g-link class="inline-block" to="/">Home</g-link> -->
				<g-link class="button" to="/contact">Contact us</g-link>
			</nav>
			<div class="py-4 md:hidden">
				<MobileMenuToggle
					class="relative z-50 ml-4"
					@click.native="menuIsOpen = !menuIsOpen"
					:menuIsOpen="menuIsOpen"
				/>
			</div>
		</div>
	</div>
</template>

<static-query>
query MainMenu {
  menu(id: "2", idType: DATABASE_ID) {
    menuItems(first: 99) {
      edges {
        node {
          label
          path
          id
          parentDatabaseId
          childItems(first: 99) {
            edges {
              node {
                label
                path
                id
              }
            }
          }
        }
      }
    }
  }
}
</static-query>

<script>
import MobileMenuToggle from '../components/MobileMenuToggle'
import WPMenu from '../components/WPMenu'
export default {
	data() {
		return {
			menuIsOpen: false
		}
	},
	components: {
		MobileMenuToggle,
		WPMenu
	},
	computed: {
		menu() {
			return this.$static.menu.menuItems.edges.filter((item) => {
				return item.node.parentDatabaseId == 0
			})
		}
	},
	mounted() {
		console.log('MainMenu mounted');
		this.menuIsOpen = false
	},
	watch: {
		$route(to, from) {
			const allSubMenus = document.querySelectorAll('.sub-menu')
			// Hide all submenus 
			allSubMenus.forEach((subMenu) => {
				subMenu.classList.add('hidden')
			})

			setTimeout(() => {
				// show all sub menus 
				allSubMenus.forEach((subMenu) => {
					subMenu.classList.remove('hidden')
				})
			}, 300);

		},
	}
}
</script>

<style lang="postcss">
.main-menu a {
	@apply font-semibold;
}
.main-menu .sub-menu a {
	@apply font-normal;
}
.main-menu .active--exact,
.main-menu a:hover {
	@apply text-primary;
}
@media (max-width: 768px) {
	.main-menu {
		@apply mx-auto absolute left-0 top-0 z-20 p-12 bg-white rounded w-full flex flex-col items-center transition-all duration-500;
		will-change: transform, opacity;
	}
	.main-menu a {
		@apply mb-4;
	}
	.hide-mobile-menu {
		transform: translateY(-100vh);
		opacity: 0;
		visibility: hidden;
	}
}

@media (max-width: 767px) {
	.sub-menu {
		@apply flex-col md:absolute overflow-hidden;
		max-height: 0;
		transform: scaleY(0);
		transform-origin: top;
		transition: max-height 500ms ease-out;
	}
	.parent:hover .sub-menu {
		@apply opacity-100;
		max-height: 1000px;
		transform: scaleY(1);
	}
	.parent:after {
		content: "";
		background: url("../assets/images/icons/chevron-down-outline.svg");
		width: 20px;
		height: 20px;
		display: inline-block;
		position: absolute;
		top: 0;
		right: 0px;
	}
}
@media (min-width: 768px) {
	.sub-menu {
		@apply shadow-lg flex-col md:absolute bg-white p-8 pb-4 opacity-0 rounded -left-8;
		visibility: hidden;
		transform: translateY(-10px);
		transform-origin: top;
	}

	.parent:hover .sub-menu,
	.mobile-open {
		@apply opacity-100;
		transform: translateY(0);
		visibility: visible;
		transition: transform 200ms ease-out, opacity 200ms ease-out;
	}
}
</style>
