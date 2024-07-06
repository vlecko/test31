import { createStore } from "vuex";
import axiosInstance from "./axiosInstance";

export default createStore({
    state: {
        isLoading: false,
        cars: [{
            id: "",
            image: "",
            brand_name: "",
        }, ],
        car: {
            car: {
                brand_name: "",
                model_name: "",
                year: "",
                engine: "",
            },
            user: {
                avatar: {
                    url: "",
                },
                username: "",
                main_auto_name: "",
            },
        },
        posts: {
            text: "",
            id: "",
            like_count: "",
            comment_count: "",
            created_at: "",
        },
        post: {
            comments: [{
                text: "",
                user: {
                    avatar: {
                        url: "",
                    },
                    username: "",
                    main_auto_name: "",
                    created_at: "",
                },
            }, ],
            post: {
                id: "",
                img: "",
                text: "",
                like_count: "",
                comment_count: "",
                created_at: "",
                user: {
                    main_auto_name: "",
                    avatar: {
                        url: "",
                    },
                },
            },
            user: {
                main_auto_name: "",
                username: "",
                avatar: {
                    url: "",
                },
            },
        },
    },

    mutations: {
        setCars(state, cars) {
            state.cars = cars;
        },
        setCar(state, car) {
            state.car = car;
        },
        setPosts(state, posts) {
            state.posts = posts;
        },
        setPost(state, post) {
            state.post = post;
        },
        setLoading(state, status) {
            state.isLoading = status;
        },
    },

    actions: {
        async fetchCars({ commit }) {
            commit("setLoading", true);
            try {
                const response = await axiosInstance.get("/cars/list");
                commit("setCars", response.data);
            } catch (error) {
                console.error("Error when retrieving a list of machines:", error);
            } finally {
                commit("setLoading", false);
            }
        },
        async fetchCar({ commit }, id) {
            commit("setLoading", true);
            try {
                const response = await axiosInstance.get(`/car/${id}`);
                commit("setCar", response.data);
            } catch (error) {
                console.error(
                    "Error when retrieving information about the car:",
                    error
                );
            } finally {
                commit("setLoading", false);
            }
        },
        async fetchPosts({ commit }, id) {
            commit("setLoading", true);
            try {
                const response = await axiosInstance.get(`car/${id}/posts`);
                commit("setPosts", response.data);
            } catch (error) {
                console.error("Error when retrieving a list of posts:", error);
            } finally {
                commit("setLoading", false);
            }
        },
        async fetchPost({ commit }, id) {
            commit("setLoading", true);
            try {
                const response = await axiosInstance.get(`/post/${id}`);
                commit("setPost", response.data);
            } catch (error) {
                console.error("Error when receiving post:", error);
            } finally {
                commit("setLoading", false);
            }
        },
    },

    getters: {
        sortedCarsList: (state) => (name) => {
            const filteredCars = state.cars.filter((car) =>
                car.brand_name.toLowerCase().startsWith(name.toLowerCase())
            );
            return filteredCars;
        },
        carsList: (state) => state.cars,
        car: (state) => state.car,
        posts: (state) => state.posts,
        post: (state) => state.post,
        isLoading: (state) => state.isLoading,
    },
});