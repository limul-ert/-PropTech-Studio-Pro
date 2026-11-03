// Database Wilayah Nasional Indonesia (Provinsi -> Kab/Kota -> Kecamatan -> Kelurahan)
const DATABASE_WILAYAH_INDONESIA = {
    "JATIM": {
        name: "Jawa Timur",
        cities: {
            "SURABAYA": {
                name: "Kota Surabaya",
                districts: {
                    "TEGALSARI": {
                        name: "Kec. Tegalsari",
                        villages: {
                            "DARMO": { name: "Kel. Darmo", zone: "K-1", minGSB: 8 },
                            "TEGALSARI_KEL": { name: "Kel. Tegalsari", zone: "R-3", minGSB: 3 },
                            "WONOREJO": { name: "Kel. Wonorejo", zone: "R-2", minGSB: 3.5 }
                        }
                    },
                    "GUBENG": {
                        name: "Kec. Gubeng",
                        villages: {
                            "GUBENG_KEL": { name: "Kel. Gubeng", zone: "K-2", minGSB: 6 },
                            "AIRLANGGA": { name: "Kel. Airlangga", zone: "R-2", minGSB: 4 }
                        }
                    }
                }
            },
            "SIDOARJO": {
                name: "Kab. Sidoarjo",
                districts: {
                    "WARU": {
                        name: "Kec. Waru",
                        villages: {
                            "PURWOSARI": { name: "Kel. Purwosari", zone: "I-1", minGSB: 10 },
                            "MEDAENG": { name: "Kel. Medaeng", zone: "R-2", minGSB: 3 }
                        }
                    }
                }
            },
            "MALANG_KOTA": {
                name: "Kota Malang",
                districts: {
                    "KLOPJEN": {
                        name: "Kec. Klojen",
                        villages: {
                            "ORAMGAN": { name: "Kel. Oro-Oro Dowo", zone: "R-2", minGSB: 4 }
                        }
                    }
                }
            }
        }
    },
    "DKI": {
        name: "DKI Jakarta",
        cities: {
            "JAKSEL": {
                name: "Kota Jakarta Selatan",
                districts: {
                    "KEBAYORAN_BARU": {
                        name: "Kec. Kebayoran Baru",
                        villages: {
                            "SENAYAN": { name: "Kel. Senayan", zone: "K-1", minGSB: 10 },
                            "GANDARIA_UTARA": { name: "Kel. Gandaria Utara", zone: "R-4", minGSB: 3 }
                        }
                    }
                }
            },
            "JAKBAR": {
                name: "Kota Jakarta Barat",
                districts: {
                    "KEBON_JERUK": {
                        name: "Kec. Kebon Jeruk",
                        villages: {
                            "KEBON_JERUK_KEL": { name: "Kel. Kebon Jeruk", zone: "R-3", minGSB: 3.5 }
                        }
                    }
                }
            }
        }
    },
    "JABAR": {
        name: "Jawa Barat",
        cities: {
            "BANDUNG_KOTA": {
                name: "Kota Bandung",
                districts: {
                    "COBLONG": {
                        name: "Kec. Coblong",
                        villages: {
                            "DAGO": { name: "Kel. Dago", zone: "R-2", minGSB: 5 }
                        }
                    }
                }
            },
            "BEKASI_KOTA": {
                name: "Kota Bekasi",
                districts: {
                    "BEKASI_SELATAN": {
                        name: "Kec. Bekasi Selatan",
                        villages: {
                            "PEKAYON_JAYA": { name: "Kel. Pekayon Jaya", zone: "K-1", minGSB: 6 }
                        }
                    }
                }
            }
        }
    },
    "JATENG": {
        name: "Jawa Tengah",
        cities: {
            "SEMARANG_KOTA": {
                name: "Kota Semarang",
                districts: {
                    "SEMARANG_TENGAH": {
                        name: "Kec. Semarang Tengah",
                        villages: {
                            "SEKAYU": { name: "Kel. Sekayu", zone: "K-1", minGSB: 7 }
                        }
                    }
                }
            }
        }
    },
    "BALI": {
        name: "Bali",
        cities: {
            "DENPASAR_KOTA": {
                name: "Kota Denpasar",
                districts: {
                    "DENPASAR_SELATAN": {
                        name: "Kec. Denpasar Selatan",
                        villages: {
                            "SANUR": { name: "Kel. Sanur", zone: "K-2", minGSB: 6 }
                        }
                    }
                }
            }
        }
    },
    "SUMUT": {
        name: "Sumatera Utara",
        cities: {
            "MEDAN_KOTA": {
                name: "Kota Medan",
                districts: {
                    "MEDAN_BARAT": {
                        name: "Kec. Medan Barat",
                        villages: {
                            "KESAWAN": { name: "Kel. Kesawan", zone: "K-1", minGSB: 8 }
                        }
                    }
                }
            }
        }
    },
    "SULSEL": {
        name: "Sulawesi Selatan",
        cities: {
            "MAKASSAR_KOTA": {
                name: "Kota Makassar",
                districts: {
                    "UJUNGPANDANG": {
                        name: "Kec. Ujung Pandang",
                        villages: {
                            "LOSARI": { name: "Kel. Losari", zone: "K-1", minGSB: 8 }
                        }
                    }
                }
            }
        }
    },
    "NASIONAL_LAINNYA": {
        name: "Seluruh Wilayah Indonesia Lainnya (PUPR)",
        cities: {
            "KAB_KOTA_GENERIC": {
                name: "Kabupaten / Kota Umum",
                districts: {
                    "KEC_GENERIC": {
                        name: "Kecamatan Umum",
                        villages: {
                            "KEL_GENERIC": { name: "Kelurahan / Desa Standar Nasional", zone: "R-GENERIC", minGSB: 3 }
                        }
                    }
                }
            }
        }
    }
};