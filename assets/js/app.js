! function(e) {
    function r(r) {
        for (var a, i, n = r[0], o = r[1], d = r[2], u = 0, l = []; u < n.length; u++) i = n[u], Object.prototype.hasOwnProperty.call(c, i) && c[i] && l.push(c[i][0]), c[i] = 0;
        for (a in o) Object.prototype.hasOwnProperty.call(o, a) && (e[a] = o[a]);
        for (m && m(r); l.length;) l.shift()();
        return s.push.apply(s, d || []), t()
    }

    function t() {
        for (var e, r = 0; r < s.length; r++) {
            for (var t = s[r], a = !0, n = 1; n < t.length; n++) {
                var o = t[n];
                0 !== c[o] && (a = !1)
            }
            a && (s.splice(r--, 1), e = i(i.s = t[0]))
        }
        return e
    }
    var a = {},
        c = {
            app: 0
        },
        s = [];

    function i(r) {
        if (a[r]) return a[r].exports;
        var t = a[r] = {
            i: r,
            l: !1,
            exports: {}
        };
        return e[r].call(t.exports, t, t.exports, i), t.l = !0, t.exports
    }
    i.m = e, i.c = a, i.d = function(e, r, t) {
        i.o(e, r) || Object.defineProperty(e, r, {
            enumerable: !0,
            get: t
        })
    }, i.r = function(e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }, i.t = function(e, r) {
        if (1 & r && (e = i(e)), 8 & r) return e;
        if (4 & r && "object" == typeof e && e && e.__esModule) return e;
        var t = Object.create(null);
        if (i.r(t), Object.defineProperty(t, "default", {
                enumerable: !0,
                value: e
            }), 2 & r && "string" != typeof e)
            for (var a in e) i.d(t, a, function(r) {
                return e[r]
            }.bind(null, a));
        return t
    }, i.n = function(e) {
        var r = e && e.__esModule ? function() {
            return e.default
        } : function() {
            return e
        };
        return i.d(r, "a", r), r
    }, i.o = function(e, r) {
        return Object.prototype.hasOwnProperty.call(e, r)
    }, i.p = "/";
    var n = window.webpackJsonp = window.webpackJsonp || [],
        o = n.push.bind(n);
    n.push = r, n = n.slice();
    for (var d = 0; d < n.length; d++) r(n[d]);
    var m = o;
    s.push([0, "chunk-vendors"]), t()
}({
    0: function(e, r, t) {
        e.exports = t("56d7")
    },
    "32db": function(e, r, t) {
        "use strict";
        t("d67c")
    },
    "56d7": function(e, r, t) {
        "use strict";
        t.r(r), t("e260"), t("e6cf"), t("cca6"), t("a79d");
        var a = t("7a23"),
            c = t("5502"),
            s = {
                class: "flex flex-col items-center justify-center dark:bg-gray-700 dark:text-white"
            },
            i = {
                class: "flex my-4 text-3xl font-bold text-center"
            },
            n = Object(a.e)(""),
            o = Object(a.f)("p", null, "", -1),
            d = {
                class: "flex flex-col items-center mb-4 md:flex-row"
            },
            m = Object(a.f)("div", {
                class: "flex flex-row items-center mr-4"
            }, [Object(a.f)("div", {
                class: "w-8 h-4 mr-1 bg-green-300 border-2 border-black dark:bg-green-800 dark:border-white"
            }), Object(a.f)("span", null, "Ramo activo")], -1),
            u = Object(a.f)("div", {
                class: "flex flex-row items-center mr-4"
            }, [Object(a.f)("div", {
                class: "w-8 h-4 mr-1 bg-blue-300 border-4 border-black border-double dark:bg-blue-800 dark:border-white"
            }), Object(a.f)("span", null, "Ramo requerido")], -1),
            l = {
                key: 0,
                class: "flex flex-row items-center mr-4"
            },
            b = Object(a.f)("div", {
                class: "w-8 h-4 mr-1 bg-yellow-300 border-2 border-black border-dotted dark:bg-yellow-600 dark:border-white"
            }, null, -1),
            C = Object(a.f)("span", null, "Ramos simultáneos", -1),
            h = Object(a.f)("div", {
                class: "flex flex-row items-center mr-4"
            }, [Object(a.f)("div", {
                class: ""
            }), Object(a.f)("span", null, '')], -1),
            f = {
                class: "max-w-screen-xl"
            };
        var j = t("edf9"),
            v = t("857e"),
            g = (t("b0c0"), {
                class: "flex flex-col items-center justify-center md:flex-row md:justify-start"
            }),
            q = {
                class: "mb-4 text-center uppercase md:transform md:-rotate-90 md:-translate-x-1/8 md:mb-0"
            },
            p = Object(a.f)("p", null, "Semestre", -1),
            I = {
                class: "flex flex-wrap items-center justify-center mb-2 md:flex-row md:justify-start"
            };
        t("a9e3");
        var N = {
            class: "text-center"
        };
        t("4de4"), t("caad"), t("d81d"), t("45fc"), t("ac1f"), t("2532"), t("1276"), t("2ca0");
        var E = {
                props: {
                    name: {
                        type: String,
                        required: !0
                    },
                    code: {
                        type: String,
                        required: !0
                    },
                    requirements: {
                        type: Array,
                        required: !0
                    }
                },
                methods: {
                    activateSubject: function() {
                        var e = this.requirements.filter((function(e) {
                                return e.includes("S")
                            })),
                            r = this.requirements.filter((function(e) {
                                return e.includes("/")
                            })),
                            t = this.requirements.filter((function(e) {
                                return !e.includes("S") && !e.includes("/")
                            })),
                            a = r.map((function(e) {
                                return e.split("/")
                            }));
                        this.$store.commit("setActiveSubject", this.code), this.$store.commit("setSimultaneousSubjects", e), this.$store.commit("setOrSubjects", a), this.$store.commit("setRequiredSubjects", t)
                    }
                },
                computed: {
                    activeClass: function() {
                        var e = this;
                        return this.$store.state.activeSubject === this.code ? "bg-green-300 dark:bg-green-800 border-2 border-black dark:border-white" : this.$store.state.orSubjects.some((function(r) {
                            return r.includes(e.code)
                        })) ? "bg-red-300 dark:bg-red-800 border-2 border-black border-dashed dark:border-white" : this.$store.state.simultaneousSubjects.some((function(r) {
                            return r.startsWith(e.code)
                        })) ? "bg-yellow-300 dark:bg-yellow-600 border-2 border-black border-dotted dark:border-white" : this.$store.state.requiredSubjects.some((function(r) {
                            return r.startsWith(e.code)
                        })) ? "bg-blue-300 dark:bg-blue-800 border-4 border-black border-double dark:border-white" : this.$store.state.activeSubject ? "dark:bg-gray-800 bg-gray-300 opacity-50 dark:opacity-75" : "dark:bg-gray-800 bg-gray-300 border-double"
                    }
                },
                render: function(e, r, t, c, s, i) {
                    return Object(a.i)(), Object(a.c)("div", {
                        onMouseover: r[1] || (r[1] = function() {
                            return i.activateSubject && i.activateSubject.apply(i, arguments)
                        }),
                        onClick: r[2] || (r[2] = function() {
                            return i.activateSubject && i.activateSubject.apply(i, arguments)
                        }),
                        onMouseleave: r[3] || (r[3] = function(r) {
                            return e.$store.dispatch("clearActiveSubject")
                        }),
                        class: ["flex flex-col items-center justify-center w-48 p-4 h-28", i.activeClass]
                    }, [Object(a.f)("p", N, Object(a.o)(t.name), 1), Object(a.f)("p", null, Object(a.o)(t.code), 1)], 34)
                }
            },
            M = {
                components: {
                    Subject: E
                },
                props: {
                    subjects: {
                        type: Array,
                        required: !0
                    },
                    number: {
                        type: Number,
                        required: !0
                    }
                },
                render: function(e, r, t, c, s, i) {
                    var n = Object(a.n)("subject");
                    return Object(a.i)(), Object(a.c)("div", g, [Object(a.f)("div", q, [p, Object(a.f)("p", null, Object(a.o)(t.number), 1)]), Object(a.f)("div", I, [(Object(a.i)(!0), Object(a.c)(a.a, null, Object(a.m)(t.subjects, (function(e, r) {
                        return Object(a.i)(), Object(a.c)(n, {
                            key: r,
                            name: e.name,
                            code: e.code,
                            requirements: e.requirements,
                            class: "mb-2 mr-2"
                        }, null, 8, ["name", "code", "requirements"])
                    })), 128))])])
                }
            },
            A = M,
            O = Object(a.r)("data-v-6880d7f6");
        
        Object(a.j)();
        var k = O((function(e, r, t, c, s, i) {
                return Object(a.i)(), Object(a.c)("div", y, [Object(a.f)("label", {
                    for: t.id,
                    class: "flex items-center cursor-pointer"
                }, [Object(a.f)("div", S, [Object(a.f)("input", {
                    id: t.id,
                    type: "checkbox",
                    class: "hidden",
                    onChange: r[1] || (r[1] = function(r) {
                        return e.$emit("toggle")
                    })
                }, null, 40, ["id"]), F, w]), Object(a.f)("div", x, Object(a.o)(t.value ? t.activeText : t.nonActiveText), 1)], 8, ["for"])])
            })),
            P = {
                props: {
                    activeText: {
                        type: String,
                        required: !0
                    },
                    nonActiveText: {
                        type: String,
                        required: !0
                    },
                    id: {
                        type: String,
                        required: !0
                    },
                    value: {
                        type: Boolean,
                        required: !0
                    }
                }
            };
        t("32db"), P.render = k, P.__scopeId = "data-v-6880d7f6";
        var D = {
                name: "App",
                components: {
                    Semester: A,
                    Toggle: P
                },
                computed: {
                    semesters: function() {
                        return "mallav3" === this.$store.state.mallaActiva ? j.semesters : v.semesters
                    }
                },
                render: function(e, r, t, c, j, v) {
                    var g = Object(a.n)("toggle"),
                        q = Object(a.n)("semester");
                    return Object(a.i)(), Object(a.c)("div", {
                        class: {
                            dark: e.$store.state.darkMode
                        }
                    }, [Object(a.f)("div", s, [Object(a.f)(g, {
                        onToggle: r[1] || (r[1] = function(r) {
                            return e.$store.dispatch("toggleDarkMode")
                        }),
                        id: "darkMode",
                        "active-text": "🌙",
                        "non-active-text": "☀️",
                        class: "ml-auto",
                        value: e.$store.state.darkMode
                    }, null, 8, ["value"]), Object(a.f)("div", i, [Object(a.f)("p", null, [n, Object(a.f)("span", null, Object(a.o)("mallav3" === e.$store.state.mallaActiva ? "(vieja 🧓👴)" : ""), 1)])]), o, Object(a.f)(g, {
                        class: "mb-4",
                        onToggle: r[2] || (r[2] = function(r) {
                            return e.$store.dispatch("toggleMalla")
                        }),
                        id: "malla",
                        "active-text": "v3",
                        "non-active-text": "v5",
                        value: "mallav3" === e.$store.state.mallaActiva
                    }, null, 8, ["value"]), Object(a.f)("div", null, [Object(a.f)("div", d, [m, u, "mallav3" === e.$store.state.mallaActiva ? (Object(a.i)(), Object(a.c)("div", l, [b, C])) : Object(a.d)("", !0), h])]), Object(a.f)("div", f, [(Object(a.i)(!0), Object(a.c)(a.a, null, Object(a.m)(v.semesters, (function(e, r) {
                        return Object(a.i)(), Object(a.c)(q, {
                            key: r,
                            subjects: e.subjects,
                            number: e.number
                        }, {
                            default: Object(a.q)((function() {
                                return [Object(a.e)(Object(a.o)(e), 1)]
                            })),
                            _: 2
                        }, 1032, ["subjects", "number"])
                    })), 128))])])], 2)
                }
            },
            T = D,
            L = (t("9a2a"), Object(c.b)({
                state: function() {
                    return {
                        mallaActiva: "mallav5",
                        darkMode: !(!window.matchMedia || !window.matchMedia("(prefers-color-scheme: dark)").matches),
                        activeSubject: "",
                        simultaneousSubjects: [],
                        orSubjects: [],
                        requiredSubjects: []
                    }
                },
                mutations: {
                    setActiveSubject: function(e, r) {
                        e.activeSubject = r
                    },
                    setSimultaneousSubjects: function(e, r) {
                        e.simultaneousSubjects = r
                    },
                    setOrSubjects: function(e, r) {
                        e.orSubjects = r
                    },
                    setRequiredSubjects: function(e, r) {
                        e.requiredSubjects = r
                    },
                    setDarkMode: function(e, r) {
                        e.darkMode = r
                    },
                    setMalla: function(e, r) {
                        e.mallaActiva = r
                    }
                },
                actions: {
                    clearActiveSubject: function(e) {
                        e.commit("setActiveSubject", ""), e.commit("setSimultaneousSubjects", []), e.commit("setOrSubjects", [])
                    },
                    toggleDarkMode: function(e) {
                        e.commit("setDarkMode", !e.state.darkMode)
                    },
                    
                },
                plugins: [Object(c.a)()]
            })),
            G = Object(a.b)({
                render: function() {
                    return Object(a.g)(T)
                }
            });
        G.config.devtools = !0, G.use(L), G.mount("#app")
    },
    "857e": function(e) {
        e.exports = JSON.parse('{"semesters":[{"number":1,"subjects":[{"code":"FI1000","name":"Introducción a la Física Clásica","shortName":"Intro a la Física","requirements":[],"credits":"6"},{"code":"MA1001","name":"Introducción al Cálculo","shortName":"Intro al Cálculo","requirements":[],"credits":"6"},{"code":"MA1101","name":"Introducción al Álgebra","shortName":"Intro al Álgebra","requirements":[],"credits":"6"},{"code":"CC1000","name":"Herramientas Computacionales para Ingeniería y Ciencias","shortName":"Herramientas","requirements":[],"credits":"3"},{"code":"CD1100","name":"Desafíos de Innovación en Ingeniería y Ciencias","shortName":"Desafíos","requirements":[],"credits":"6"},{"code":"BT1211","name":"Aplicaciones de la Biología a la Ingeniería y Ciencias","shortName":"Biología","requirements":[],"credits":"3"}]},{"number":2,"subjects":[{"code":"FI1100","name":"Introducción a la Física Moderna","shortName":"Moderna","requirements":["FI1000","MA1001","MA1101"],"credits":"6"},{"code":"MA1002","name":"Cálculo Diferencial e Integral","shortName":"Diferencial","requirements":["MA1001"],"credits":"6"},{"code":"MA1102","name":"Álgebra Lineal","shortName":"Lineal","requirements":["MA1101"],"credits":"6"},{"code":"CC1002","name":"Introducción a la Programación","shortName":"Progra","requirements":[],"credits":"6"},{"code":"CD1201","name":"Proyecto de Innovación en Ingeniería y Ciencias","shortName":"Proyecto","requirements":["CD1100"],"credits":"3"},{"code":"DR180A","name":"Ejercicio Físico y Manejo del Estrés","shortName":"Formación Integral","requirements":[],"credits":"3"}]},{"number":3,"subjects":[{"code":"MA2001","name":"Cálculo en Varias Variables","shortName":"CVV","requirements":["MA1002","MA1102"],"credits":"6"},{"code":"MA2601","name":"Ecuaciones Diferenciales Ordinarias","shortName":"EDO","requirements":["MA1002","MA1102"],"credits":"6"},{"code":"FI2001","name":"Mecánica","shortName":"Mecánica","requirements":["FI1100","MA1002","MA1102"],"credits":"6"},{"code":"FI2003","name":"Métodos Experimentales","shortName":"Métodos","requirements":["FI1100","MA1002"],"credits":"6"},{"code":"IQ2211","name":"Química","shortName":"Química","requirements":[],"credits":"6"},{"code":"EI4205","name":"Inglés 5","shortName":"Inglés","requirements":[""],"credits":"3"},{"code":"EH2518","name":"Introducción a la Lengua y Cultura Mapuche","shortName":"Mapuche","requirements":[""],"credits":"3"}]},{"number":4,"subjects":[{"code":"MA2002","name":"Cálculo Avanzado y Aplicaciones","shortName":"CAA","requirements":["MA2001","MA2601"],"credits":"6"},{"code":"MA3403","name":"Probabilidades y Estadística","shortName":"Proba y Esta","requirements":["MA2001"],"credits":"6"},{"code":"CC3001","name":"Algoritmos y Estructuras de Datos","shortName":"Algoritmos","requirements":["CC1002"],"credits":"6"},{"code":"IN2201","name":"Economía","shortName":"Econo","requirements":["MA2001"],"credits":"6"},{"code":"FI2002","name":"Electromagnetismo","shortName":"Electro","requirements":["MA2001","MA2601","FI2003"],"credits":"6"},{"code":"FI2004/IQ2212","name":"Termodinámica / Termodinámica Química","shortName":"Termo","requirements":["IQ2211","FI2001","MA2001"],"credits":"6"},{"code":"CD2201","name":"Módulo Interdisciplinario","shortName":"Módulo","requirements":["CD1201"],"credits":"3"},{"code":"EH2515","name":"Primeras Naciones Americanas","shortName":"Americanas","requirements":[],"credits":"3"}]},{"number":5,"subjects":[{"code":"CC3201","name":"Bases de Datos","shortName":"Batos","requirements":["CC3001"],"credits":"6"},{"code":"CC3101","name":"Matemáticas Discretas para la Computación","shortName":"Discretas","requirements":["MA1101","CC1002"],"credits":"6"}]},{"number":6,"subjects":[{"code":"EL3101","name":"Análisis y Diseño de Circuitos Eléctricos","shortName":"Electivo","requirements":["MA2002","FI2002"],"credits":"6"},{"code":"CC3002","name":"Metodologías de Diseño y Programación","shortName":"Memes","requirements":["CC3001"],"credits":"6"},{"code":"CC3102","name":"Teoría de la Computación","shortName":"Teoría","requirements":["CC3101"],"credits":"6"},{"code":"CC3301","name":"Programación de Software de Sistemas","shortName":"PSS","requirements":["CC3001"],"credits":"6"},{"code":"CC7220","name":"La Web de datos","shortName":"Watos","requirements":["CC3201"],"credits":"6"},{"code":"CC6104","name":"Pensamiento Estadístico","shortName":"Esta","requirements":["MA3403"],"credits":"6"},{"code":"AA0010","name":"Taller de Inducción a Competencias Docentes para Auxiliares","shortName":"AUX","requirements":[""],"credits":"0"}]},{"number":7,"subjects":[{"code":"EL3102","name":"Sistemas Digitales","shortName":"Electivo","requirements":["CD2201","FI2002"],"credits":"6"},{"code":"CC5205","name":"Minería de Datos","shortName":"Minería","requirements":["CC3001"],"credits":"6"},{"code":"CC4401","name":"Ingeniería de Software","shortName":"Ing de SW","requirements":["CC3002","CC3201"],"credits":"6"},{"code":"CC4102","name":"Diseño y Análisis de Algoritmos","shortName":"Logaritmos","requirements":["MA3403","CC3001","CC3102"],"credits":"6"},{"code":"CC4302","name":"Sistemas Operativos","shortName":"SOs","requirements":["CC3301"],"credits":"6"},{"code":"CC4005","name":"Taller de programación competitiva A","shortName":"Electivo","requirements":["CC1000","CC1002"],"credits":"6"},{"code":"FE0001","name":"Formación Integral de Especialidad","shortName":"FI Especialidad","requirements":[],"credits":"3"}]},{"number":8,"subjects":[{"code":"CC3501","name":"Modelación y Computación Gráfica para Ingenieros","shortName":"Gráfica","requirements":["MA2001","MA2601","CC1002","FI2001"],"credits":"6"},{"code":"CC4101","name":"Lenguajes de Programación","shortName":"Lenguajes","requirements":["CC3102"],"credits":"6"},{"code":"EL0004","name":"Electivo de Licenciatura 3","shortName":"Electivo","requirements":[],"credits":"6"},{"code":"CC4402","name":"Formulación, Evaluación y Gestión de Proyectos","shortName":"Evalua","requirements":["CC4401","IN2201","CD2201"],"credits":"6"},{"code":"CC5404","name":"Taller de UML","shortName":"Electivo","requirements":["CC3002"],"credits":"6"},{"code":"CG0001","name":"Núcleo Gestión para Ingenieros","shortName":"Gestión","requirements":[],"credits":"6"}]},{"number":9,"subjects":[{"code":"CC4303","name":"Redes","shortName":"Redes","requirements":["CC4302"],"credits":"6"},{"code":"EL0005","name":"Electivo de Licenciatura 4","shortName":"Electivo","requirements":[],"credits":"6"},{"code":"CC4901","name":"Práctica Profesional I","shortName":"Práctica 1","requirements":["CC3002","CC3201","CC3301"],"credits":"7"},{"code":"EE0004","name":"Electivo de Especialidad 4","shortName":"Electivo","requirements":[],"credits":"6"},{"code":"EE0005","name":"Electivo de Especialidad 5","shortName":"Electivo","requirements":[],"credits":"6"}]},{"number":10,"subjects":[{"code":"EE0006","name":"Electivo de Especialidad 6","shortName":"Electivo","requirements":[],"credits":"6"},{"code":"CC5901","name":"Práctica Profesional II","shortName":"Práctica 2","requirements":["CC4901","CC4401","CC4101"],"credits":"7"},{"code":"CC6907","name":"Introducción al Trabajo de Título","shortName":"E","requirements":["CC4402"],"credits":"6"},{"code":"CC5402","name":"Proyecto de Software","shortName":"Proyecto","requirements":["CC5205","CC4402"],"credits":"12"}]},{"number":11,"subjects":[{"code":"CC6919","name":"Trabajo de Título","shortName":"F","requirements":["CC6907"],"credits":"24"},{"code":"CC6910","name":"Trabajo de Memoria de Título","shortName":"M","requirements":["CC5402","EI4205"],"credits":"21"}]}]}')
    },
    "9a2a": function(e, r, t) {},
    d67c: function(e, r, t) {},
    edf9: function(e) {
        e.exports = JSON.parse('{"semesters":[{"number":1,"subjects":[{"code":"FI1001","name":"Introducción a la Física Newtoniana","shortName":"Intro a la Física","requirements":[],"credits":"6"},{"code":"MA1001","name":"Introducción al Cálculo","shortName":"Intro al Cálculo","requirements":[],"credits":"6"},{"code":"MA1101","name":"Introducción al Álgebra","shortName":"Intro al Álgebra","requirements":[],"credits":"6"},{"code":"CC1000","name":"Herramientas Computacionales para Ingeniería y Ciencias","shortName":"Herramientas","requirements":[],"credits":"3"},{"code":"EI1001","name":"Introducción a la Ingeniería I","shortName":"Intro a la Ing","requirements":[],"credits":"3"},{"code":"CM1001","name":"Química","shortName":"Química","requirements":[],"credits":"3"}]},{"number":2,"subjects":[{"code":"FI1002","name":"Sistemas Newtonianos","shortName":"Sist. Newtonianos","requirements":["FI1001","CC1000/CC1002","MA1001"],"credits":"6"},{"code":"MA1002","name":"Cálculo Diferencial e Integral","shortName":"Diferencial","requirements":["MA1001","MA1101S"],"credits":"6"},{"code":"MA1102","name":"Álgebra Lineal","shortName":"Lineal","requirements":["MA1001S","MA1101"],"credits":"6"},{"code":"CC1002","name":"Introducción a la Programación","shortName":"Progra","requirements":[],"credits":"6"},{"code":"EI1102","name":"Introducción a la Ingeniería II","shortName":"Intro II","requirements":[],"credits":"3"},{"code":"FG0001","name":"Formación Integral","shortName":"Formación Integral","requirements":[],"credits":"3"}]},{"number":3,"subjects":[{"code":"FI2001","name":"Mecánica","shortName":"Mecánica","requirements":["FI1002","MA1002","MA1102"],"credits":"6"},{"code":"MA2001","name":"Cálculo en Varias Variables","shortName":"CVV","requirements":["MA1002","MA1102"],"credits":"6"},{"code":"MA2601","name":"Ecuaciones Diferenciales Ordinarias","shortName":"EDO","requirements":["MA1002","MA1102"],"credits":"6"},{"code":"IN2201","name":"Economía","shortName":"Econo","requirements":["MA2001S"],"credits":"6"},{"code":"EI2001","name":"Taller de Proyecto","shortName":"Taller","requirements":[],"credits":"3"},{"code":"FG0002","name":"Formación Integral","shortName":"Formación Integral","requirements":[],"credits":"3"}]},{"number":4,"subjects":[{"code":"FI2004/CM2004","name":"Termodinámica o Fisicoquímica","shortName":"Mecánica","requirements":["CM1001","MA2001","FI2001S"],"credits":"6"},{"code":"MA2002","name":"Cálculo Avanzado y Aplicaciones","shortName":"CAA","requirements":["MA2001","MA2601"],"credits":"6"},{"code":"FI2002","name":"Electromagnetismo","shortName":"Electro","requirements":["FI2001","MA2001","MA2601"],"credits":"6"},{"code":"FI2003","name":"Métodos Experimentales","shortName":"Métodos","requirements":["MA2001","CM1001","EI1102","FI2001","MA2601"],"credits":"6"},{"code":"FG0003","name":"Formación Integral","shortName":"Formación Integral","requirements":[],"credits":"3"},{"code":"FG0004","name":"Formación Integral","shortName":"Formación Integral","requirements":[],"credits":"3"}]},{"number":5,"subjects":[{"code":"CC3001","name":"Algoritmos y Estructuras de Datos","shortName":"Algoritmos","requirements":["CC1002","MA1101"],"credits":"6"},{"code":"CC3101","name":"Matemáticas Discretas para la Computación","shortName":"Discretas","requirements":["CC1002","MA1101"],"credits":"6"},{"code":"MA3403","name":"Probabilidades y Estadística","shortName":"Proba y Esta","requirements":["MA2001"],"credits":"6"},{"code":"CC3501","name":"Modelación y Computación Gráfica para Ingenieros","shortName":"Gráfica","requirements":["CC1002","MA2601"],"credits":"6"},{"code":"FG0005","name":"Formación Integral","shortName":"Formación Integral","requirements":[],"credits":"3"},{"code":"FG0006","name":"Formación Integral","shortName":"Formación Integral","requirements":[],"credits":"3"}]},{"number":6,"subjects":[{"code":"CC3301","name":"Programación de Software de Sistemas","shortName":"PSS","requirements":["CC3001"],"credits":"6"},{"code":"CC3002","name":"Metodologías de Diseño y Programación","shortName":"Metodologías","requirements":["CC3001"],"credits":"6"},{"code":"CC3102","name":"Teoría de la Computación","shortName":"Teoría","requirements":["CC3101","CC3001"],"credits":"6"},{"code":"CC3201","name":"Bases de Datos","shortName":"BDD","requirements":["CC3101/FI2002"],"credits":"6"},{"code":"EL0001","name":"Electivo de Licenciatura 1","shortName":"Electivo","requirements":[],"credits":"6"}]},{"number":7,"subjects":[{"code":"CC4301","name":"Arquitectura de Computadores","shortName":"Arqui","requirements":["CC3301","FI2002"],"credits":"6"},{"code":"CC4101","name":"Lenguajes de Programación","shortName":"Lenguajes","requirements":["CC3102"],"credits":"6"},{"code":"CC4401","name":"Ingeniería de Software","shortName":"Ing de SW","requirements":["CC3001","CC3002","CC3201"],"credits":"6"},{"code":"CC4901","name":"Práctica Profesional I","shortName":"Práctica 1","requirements":["CC3002","CC3201","CC3301"],"credits":"7"},{"code":"EL0003","name":"Electivo de Licenciatura 2","shortName":"Electivo","requirements":[],"credits":"6"},{"code":"EL0003","name":"Electivo de Licenciatura 3","shortName":"Electivo","requirements":[],"credits":"6"}]},{"number":8,"subjects":[{"code":"CC4302","name":"Sistemas Operativos","shortName":"SOs","requirements":["CC4301"],"credits":"6"},{"code":"CC4303","name":"Redes","shortName":"Redes","requirements":["CC4302S"],"credits":"6"},{"code":"CC4102","name":"Diseño y Análisis de Algoritmos","shortName":"Ing de SW","requirements":["MA3403","CC3102","FI2003"],"credits":"6"},{"code":"EL0004","name":"Electivo de Licenciatura 4","shortName":"Electivo","requirements":[],"credits":"6"},{"code":"EL0005","name":"Electivo de Licenciatura 5","shortName":"Electivo","requirements":[],"credits":"6"}]},{"number":9,"subjects":[{"code":"IN3301","name":"Evaluación de Proyectos","shortName":"Evalua","requirements":["IN2201","MA3403"],"credits":"6"},{"code":"CC5401","name":"Ingeniería de Software II","shortName":"Ing de SW 2","requirements":["CC4101","CC4401"],"credits":"6"},{"code":"CC5901","name":"Práctica Profesional II","shortName":"Práctica 2","requirements":["CC4901","CC4401","CC4101"],"credits":"7"},{"code":"EE0001","name":"Electivo de Especialidad 1","shortName":"Electivo","requirements":[],"credits":"6"},{"code":"EE0002","name":"Electivo de Especialidad 2","shortName":"Electivo","requirements":[],"credits":"6"},{"code":"EE0003","name":"Electivo de Especialidad 3","shortName":"Electivo","requirements":[],"credits":"6"}]},{"number":10,"subjects":[{"code":"CC6908","name":"Introducción al Trabajo de Título","shortName":"E","requirements":["CC5401"],"credits":"6"},{"code":"CG0001","name":"Gestión para Ingenieros","shortName":"Gestión","requirements":[],"credits":"6"},{"code":"CC5402","name":"Proyecto de Software","shortName":"Proyecto","requirements":["IN3301","CC5401","CC4303","CC4102"],"credits":"12"},{"code":"EE0004","name":"Electivo de Especialidad 4","shortName":"Electivo","requirements":[],"credits":"6"},{"code":"FE0001","name":"Formación Integral de Especialidad I","shortName":"FI Especialidad","requirements":[],"credits":"3"}]},{"number":11,"subjects":[{"code":"CC6909","name":"Trabajo de Memoria de Título","shortName":"F","requirements":["CC6908","CC5402"],"credits":"21"},{"code":"EE0005","name":"Electivo de Especialidad 5","shortName":"Electivo","requirements":[],"credits":"6"},{"code":"FE0002","name":"Formación Integral de Especialidad II","shortName":"FI Especialidad","requirements":[],"credits":"3"}]}]}')
    }
});