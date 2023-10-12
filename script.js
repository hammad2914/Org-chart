Highcharts.chart('container', {
    chart: {
        inverted: true,
        height: 2200,
        style: {
            fontFamily: 'Oswald, sans-serif'
        },
    },
    title: {
        text: null
    },
    series: [{
        type: 'organization',
        name: 'Euro Centra',
        nodeSort: 'ascending',
        animation: false,
        keys: ['from', 'to'],
        data: [
            ['Country Head', 'SD Euro'],
            ['SD Euro', 'Business Team'],
            ['SD Euro', 'Tech Team'],
            ['SD Euro', 'Service Team'],
            ['SD Euro', 'Supply chain'],
            ['SD Euro', 'Osg'],
            ['Business Team', 'Business1'],
            ['Business Team', 'Business2'],
            ['Business Team', 'Business3'],
            ['Business Team', 'Business4'],
            ['Business Team', 'Business5'],
            ['Tech Team', 'Tech Head'],
            ['Tech Head', 'Product Devs'],
            ['Tech Head', 'Quality Audits'],
            ['Product Devs', 'ProductDev1'],
            ['Product Devs', 'ProductDev2'],
            ['Product Devs', 'ProductDev3'],
            ['Product Devs', 'ProductDev4'],
            ['Quality Audits', 'QualityAudit1'],
            ['Quality Audits', 'QualityAudit2'],
            ['Quality Audits', 'QualityAudit3'],
            ['Quality Audits', 'QualityAudit4'],
            ['Quality Audits', 'QualityAudit5'],
            ['Quality Audits', 'QualityAudit6'],
            ['Quality Audits', 'QualityAudit7'],
            ['Quality Audits', 'QualityAudit8'],
            ['Quality Audits', 'QualityAudit9'],
            ['Quality Audits', 'QualityAudit10'],
            ['Service Team', 'Service Head'],
            ['Service Head', 'Logistics'],
            ['Service Head', 'Sustainability'],
            ['Service Head', 'CSR & Accord'],
            ['Service Head', 'MI S'],
            ['Service Head', 'Manufacturing Excellence'],
            ['Service Head', 'Product Library'],
            ['Service Head', 'Human Resource'],
            ['Logistics', 'Logistics1'],
            ['Logistics', 'Logistics2'],
            ['Logistics', 'Logistics3'],
            ['Logistics', 'Logistics4'],
            ['Sustainability', 'Sustainability1'],
            ['CSR & Accord', 'CSR & Accord1'],
            ['CSR & Accord', 'CSR & Accord2'],
            ['MI S', 'MI S1'],
            ['MI S', 'MI S2'],
            ['MI S', 'MI S3'],
            ['Manufacturing Excellence', 'Manufacturing Excellence1'],
            ['Product Library', 'Product Library1'],
            ['Human Resource', 'Human Resource1'],
            ['Supply chain', 'Supply chain1'],
            ['Osg', 'Osg1'],
            ['Osg', 'Osg2'],
            ['Osg', 'Osg3'],
            ['Osg', 'Osg4'],
            ['Osg', 'Osg5'],
            ['Osg', 'Osg6'],
            ['Osg', 'Osg7'],
            ['Osg', 'Osg8'],
            ['Osg', 'Osg9'],
            ['Osg', 'Osg10'],
            ['Osg', 'Osg11'],
            ['Osg', 'Osg12'],
            ['Osg', 'Osg13'],
            ['Osg', 'Osg14'],
            ['Osg', 'Osg15'],
            ['Osg', 'Osg16'],
            ['Osg', 'Osg17'],
            ['Osg', 'Osg18'],
            ['Osg', 'Osg19'],
            ['Osg', 'Osg20'],
            ['Osg', 'Osg21'],
            ['Osg', 'Osg22'],
            ['Osg', 'Osg23'],
            ['Osg', 'Osg24'],
        ],
        levels: [{
            level: 0
        }, {
            level: 1
        }, {
            level: 2
        }, {
            level: 3
        }, {
            level: 4
        }, {
            level: 5
        }, {
            level: 6,
            align: 'left',
        }, {
            level: 7,
            align: 'left',
        }, {
            level: 8,
            align: 'left',
        }, {
            level: 9,
            align: 'left',
        }, {
            level: 10,
            align: 'left',
        }, {
            level: 11,
            align: 'left',
        }, {
            level: 12,
            align: 'left',
        }, {
            level: 13,
            align: 'left',
        }, {
            level: 14,
            align: 'left'
        }, {
            level: 15,
            align: 'left'
        }, {
            level: 16,
            align: 'left'
        }, {
            level: 17,
            align: 'left'
        }, {
            level: 18,
            align: 'left'
        }, {
            level: 19,
            align: 'left'
        }, {
            level: 20,
            align: 'left'
        }, {
            level: 21,
            align: 'left'
        }, {
            level: 22,
            align: 'left'
        }, {
            level: 23,
            align: 'left'
        }, {
            level: 24,
            align: 'left'
        }, {
            level: 25,
            align: 'left'
        }, {
            level: 26,
            align: 'left',
        }
        ],
        linkColor: '#ccc',
        linkLineWidth: 2,
        linkRadius: 0,
        nodes: [
            {
                id: 'Country Head',
                name: 'Kaschif R. Israr',
                title: 'Country Head',
                email: 'Kaschif@eurocentra.com.pk',
                color: '#007AD0',
                offset: 0,
                level: 0,
                image: 'https://wp-assets.highcharts.com/www-highcharts-com/blog/wp-content/uploads/2018/11/13105551/Vidar.jpg',
                dataLabels: {
                    format: '<div class="node-box"><img class="node-img" src="{point.image}" style="width: 50px; height: 50px;"><div class="node-info"><h5>{point.name}</h5><h6>{point.title}</h6></div></div>'
                }
            },
            {
                id: 'SD Euro',
                name: 'Annika Schwaegerl',
                title: 'Sales Director Europe',
                email: 'annika_schwaegerl@eurocentra.com.hk',
                image: 'https://wp-assets.highcharts.com/www-highcharts-com/blog/wp-content/uploads/2018/11/12132317/Grethe.jpg',
                color: '#007AD0',
                level: 1,
                offset: 0,
                dataLabels: {
                    format: '<div class="node-box"><img class="node-img" src="{point.image}" style="width: 50px; height: 50px;"><div class="node-info"><h5>{point.name}</h5><h6>{point.title}</h6></div></div>'
                }
            },
            {
                id: 'Business Team',
                name: 'Business Team',
                color: '#495057'
            },
            {
                id: 'Tech Team',
                name: 'Technical Team',
                color: '#495057'
            },
            {
                id: 'Service Team',
                name: 'Service Team',
                color: '#495057'
            },
            {
                id: 'Supply chain',
                name: 'Supply Chain',
                color: '#495057'
            },
            {
                id: 'Osg',
                name: 'OSG',
                color: '#495057'
            },
            {
                id: 'Business1',
                name: 'Umair Ahmed',
                title: 'Division Head <br/> Bonprix - Knits',
                email: 'Umair@eurocentra.com.pk',
                color: '#007AD0',
                
                level: 3,
                image: 'https://wp-assets.highcharts.com/www-highcharts-com/blog/wp-content/uploads/2018/11/13105551/Vidar.jpg',
                dataLabels: {
                    format: '<div class="node-box"><img class="node-img" src="{point.image}" style="width: 50px; height: 50px;"><div class="node-info"><h5>{point.name}</h5><h6>{point.title}</h6></div></div>'
                }
            },
            {
                id: 'Business2',
                name: 'Abdul Hafeez',
                title: 'Division Head <br/> Bonprix - Woven',
                email: 'abdul.hafeez@eurocentra.com.pk',
                color: '#007AD0',
                
                level: 4,
                image: 'https://wp-assets.highcharts.com/www-highcharts-com/blog/wp-content/uploads/2018/11/13105551/Vidar.jpg',
                dataLabels: {
                    format: '<div class="node-box"><img class="node-img" src="{point.image}" style="width: 50px; height: 50px;"><div class="node-info"><h5>{point.name}</h5><h6>{point.title}</h6></div></div>'
                }
            },
            {
                id: 'Business3',
                name: 'Muhammad Umar',
                title: 'Division Head <br/> Bonprix - Limango',
                email: 'Umer@eurocentra.com.pk',
                color: '#007AD0',
                level: 5,
                image: 'https://wp-assets.highcharts.com/www-highcharts-com/blog/wp-content/uploads/2018/11/13105551/Vidar.jpg',
                dataLabels: {
                    format: '<div class="node-box"><img class="node-img" src="{point.image}" style="width: 50px; height: 50px;"><div class="node-info"><h5>{point.name}</h5><h6>{point.title}</h6></div></div>'
                }
            },
            {
                id: 'Business4',
                name: 'Kashif Younus',
                title: 'Deputy Merchandising <br/> Manager',
                email: 'Kashif.younus@eurocentra.com.pk',
                color: '#007AD0',
                
                level: 6,
                image: 'https://wp-assets.highcharts.com/www-highcharts-com/blog/wp-content/uploads/2018/11/13105551/Vidar.jpg',
                dataLabels: {
                    format: '<div class="node-box"><img class="node-img" src="{point.image}" style="width: 50px; height: 50px;"><div class="node-info"><h5>{point.name}</h5><h6>{point.title}</h6></div></div>'
                }
            },
            {
                id: 'Business5',
                name: 'Syed Amir Abbas',
                title: 'Deputy Merchandising <br/> Manager',
                email: 'Aamir.abbas@eurocentra.com.pk',
                color: '#007AD0',
                
                level: 7,
                image: 'https://wp-assets.highcharts.com/www-highcharts-com/blog/wp-content/uploads/2018/11/13105551/Vidar.jpg',
                dataLabels: {
                    format: '<div class="node-box"><img class="node-img" src="{point.image}" style="width: 50px; height: 50px;"><div class="node-info"><h5>{point.name}</h5><h6>{point.title}</h6></div></div>'
                }
            },
            {
                id: 'Tech Head',
                name: 'Rana Sohaib Mustafa',
                title: 'Head of Quality <br/> Department',
                email: 'Sohaib@eurocentra.com.pk',
                color: '#007AD0',
                level: 3,
                image: 'https://wp-assets.highcharts.com/www-highcharts-com/blog/wp-content/uploads/2018/11/13105551/Vidar.jpg',
                dataLabels: {
                    format: '<div class="node-box"><img class="node-img" src="{point.image}" style="width: 50px; height: 50px;"><div class="node-info"><h5>{point.name}</h5><h6>{point.title}</h6></div></div>'
                }
            },
            {
                id: 'Product Devs',
                name: 'Product Developers',
                color: '#495057',
                level: 4,
            },
            {
                id: 'Quality Audits',
                name: 'Quality Auditors',
                color: '#495057',
                level: 4,
            },
            {
                id: 'ProductDev1',
                name: 'Khizar Hayat',
                title: 'Technical Lead',
                email: 'khizar@eurocentra.com.pk',
                color: '#007AD0',
                level: 5,
                image: 'https://wp-assets.highcharts.com/www-highcharts-com/blog/wp-content/uploads/2018/11/13105551/Vidar.jpg',
                dataLabels: {
                    format: '<div class="node-box"><img class="node-img" src="{point.image}" style="width: 50px; height: 50px;"><div class="node-info"><h5>{point.name}</h5><h6>{point.title}</h6></div></div>'
                }
            },
            {
                id: 'ProductDev2',
                name: 'Muhammad Tahreem',
                title: 'Technical Lead',
                email: 'tehreem@eurocentra.com.pk',
                color: '#007AD0',
                level: 6,
                image: 'https://wp-assets.highcharts.com/www-highcharts-com/blog/wp-content/uploads/2018/11/13105551/Vidar.jpg',
                dataLabels: {
                    format: '<div class="node-box"><img class="node-img" src="{point.image}" style="width: 50px; height: 50px;"><div class="node-info"><h5>{point.name}</h5><h6>{point.title}</h6></div></div>'
                }
            },
            {
                id: 'ProductDev3',
                name: 'Muhammad Zeeshan',
                title: 'Technical Lead',
                email: 'M.zeeshan@eurocentra.com.pk',
                color: '#007AD0',
                level: 7,
                image: 'https://wp-assets.highcharts.com/www-highcharts-com/blog/wp-content/uploads/2018/11/13105551/Vidar.jpg',
                dataLabels: {
                    format: '<div class="node-box"><img class="node-img" src="{point.image}" style="width: 50px; height: 50px;"><div class="node-info"><h5>{point.name}</h5><h6>{point.title}</h6></div></div>'
                }
            },
            {
                id: 'ProductDev4',
                name: 'Imran Amjad',
                title: 'Quality Head <br/> (Faisalabad)',
                email: 'imran.amjad@eurocentra.com.pk',
                color: '#007AD0',
                level: 8,
                image: 'https://wp-assets.highcharts.com/www-highcharts-com/blog/wp-content/uploads/2018/11/13105551/Vidar.jpg',
                dataLabels: {
                    format: '<div class="node-box"><img class="node-img" src="{point.image}" style="width: 50px; height: 50px;"><div class="node-info"><h5>{point.name}</h5><h6>{point.title}</h6></div></div>'
                }
            },
            {
                id: 'QualityAudit1',
                name: 'MUHAMMAD ASIM ',
                title: 'Quality Head <br/> (Karachi)',
                email: 'asim@eurocentra.com.pk',
                color: '#007AD0',
                level: 5,
                image: 'https://wp-assets.highcharts.com/www-highcharts-com/blog/wp-content/uploads/2018/11/13105551/Vidar.jpg',
                dataLabels: {
                    format: '<div class="node-box"><img class="node-img" src="{point.image}" style="width: 50px; height: 50px;"><div class="node-info"><h5>{point.name}</h5><h6>{point.title}</h6></div></div>'
                }
            },
            {
                id: 'QualityAudit2',
                name: 'Faheem Shahzad',
                title: 'Quality Head <br/> (Lahore)',
                email: 'faheem@eurocentra.com.pk',
                color: '#007AD0',
                level: 6,
                image: 'https://wp-assets.highcharts.com/www-highcharts-com/blog/wp-content/uploads/2018/11/13105551/Vidar.jpg',
                dataLabels: {
                    format: '<div class="node-box"><img class="node-img" src="{point.image}" style="width: 50px; height: 50px;"><div class="node-info"><h5>{point.name}</h5><h6>{point.title}</h6></div></div>'
                }
            },
            {
                id: 'QualityAudit3',
                name: 'Ismail Khan',
                title: 'Manager, <br/> Chemical Management',
                email: 'ismail@eurocentra.com.pk',
                color: '#007AD0',
                level: 7,
                image: 'https://wp-assets.highcharts.com/www-highcharts-com/blog/wp-content/uploads/2018/11/13105551/Vidar.jpg',
                dataLabels: {
                    format: '<div class="node-box"><img class="node-img" src="{point.image}" style="width: 50px; height: 50px;"><div class="node-info"><h5>{point.name}</h5><h6>{point.title}</h6></div></div>'
                }
            },
            {
                id: 'QualityAudit4',
                name: 'Dania Jamil',
                title: 'Testing Manager',
                email: 'dania@eurocentra.com.pk',
                color: '#007AD0',
                level: 8,
                image: 'https://wp-assets.highcharts.com/www-highcharts-com/blog/wp-content/uploads/2018/11/13105551/Vidar.jpg',
                dataLabels: {
                    format: '<div class="node-box"><img class="node-img" src="{point.image}" style="width: 50px; height: 50px;"><div class="node-info"><h5>{point.name}</h5><h6>{point.title}</h6></div></div>'
                }
            },
            {
                id: 'QualityAudit5',
                name: 'Saleem Khan',
                title: 'Quality Lead',
                email: 'saleem-eurocentra@outlook.com',
                color: '#007AD0',
                level: 9,
                image: 'https://wp-assets.highcharts.com/www-highcharts-com/blog/wp-content/uploads/2018/11/13105551/Vidar.jpg',
                dataLabels: {
                    format: '<div class="node-box"><img class="node-img" src="{point.image}" style="width: 50px; height: 50px;"><div class="node-info"><h5>{point.name}</h5><h6>{point.title}</h6></div></div>'
                }
            },
            {
                id: 'QualityAudit6',
                name: 'Shahzad Ansari',
                title: 'Quality Lead',
                email: 'shahzad-eurocentra@outlook.com',
                color: '#007AD0',
                level: 10,
                image: 'https://wp-assets.highcharts.com/www-highcharts-com/blog/wp-content/uploads/2018/11/13105551/Vidar.jpg',
                dataLabels: {
                    format: '<div class="node-box"><img class="node-img" src="{point.image}" style="width: 50px; height: 50px;"><div class="node-info"><h5>{point.name}</h5><h6>{point.title}</h6></div></div>'
                }
            },
            {
                id: 'QualityAudit7',
                name: 'Muhammad Ali',
                title: 'Quality Lead',
                email: 'ali-eurocentra@outlook.com',
                color: '#007AD0',
                level: 11,
                image: 'https://wp-assets.highcharts.com/www-highcharts-com/blog/wp-content/uploads/2018/11/13105551/Vidar.jpg',
                dataLabels: {
                    format: '<div class="node-box"><img class="node-img" src="{point.image}" style="width: 50px; height: 50px;"><div class="node-info"><h5>{point.name}</h5><h6>{point.title}</h6></div></div>'
                }
            },
            {
                id: 'QualityAudit8',
                name: 'Muhammad Jamil',
                title: 'Quality Lead',
                email: 'jamil-eurocentra@outlook.com',
                color: '#007AD0',
                level: 12,
                image: 'https://wp-assets.highcharts.com/www-highcharts-com/blog/wp-content/uploads/2018/11/13105551/Vidar.jpg',
                dataLabels: {
                    format: '<div class="node-box"><img class="node-img" src="{point.image}" style="width: 50px; height: 50px;"><div class="node-info"><h5>{point.name}</h5><h6>{point.title}</h6></div></div>'
                }
            },
            {
                id: 'QualityAudit9',
                name: 'S M Faisal Iqbal',
                title: 'Quality Lead',
                email: 'mfaisal-eurocentra@outlook.com',
                color: '#007AD0',
                level: 13,
                image: 'https://wp-assets.highcharts.com/www-highcharts-com/blog/wp-content/uploads/2018/11/13105551/Vidar.jpg',
                dataLabels: {
                    format: '<div class="node-box"><img class="node-img" src="{point.image}" style="width: 50px; height: 50px;"><div class="node-info"><h5>{point.name}</h5><h6>{point.title}</h6></div></div>'
                }
            },
            {
                id: 'QualityAudit10',
                name: 'Syed Zahid Ali ',
                title: 'Quality Lead',
                email: 'zahid-eurocentra@outlook.com',
                color: '#007AD0',
                level: 14,
                image: 'https://wp-assets.highcharts.com/www-highcharts-com/blog/wp-content/uploads/2018/11/13105551/Vidar.jpg',
                dataLabels: {
                    format: '<div class="node-box"><img class="node-img" src="{point.image}" style="width: 50px; height: 50px;"><div class="node-info"><h5>{point.name}</h5><h6>{point.title}</h6></div></div>'
                }
            },
            {
                id: 'Service Head',
                name: 'Zahid Sajjad ',
                title: 'Head of Sustainability <br/> & Digital Innovation',
                email: 'zahid@eurocentra.com.pk',
                color: '#007AD0',
                level: 3,
                image: 'https://wp-assets.highcharts.com/www-highcharts-com/blog/wp-content/uploads/2018/11/13105551/Vidar.jpg',
                dataLabels: {
                    format: '<div class="node-box"><img class="node-img" src="{point.image}" style="width: 50px; height: 50px;"><div class="node-info"><h5>{point.name}</h5><h6>{point.title}</h6></div></div>'
                }
            },
            {
                id: 'Logistics',
                name: 'Logistics',
                color: '#495057',
                level: 4,
            },
            {
                id: 'Sustainability',
                name: 'Sustainability',
                color: '#495057',
                level: 4,
            },
            {
                id: 'CSR & Accord',
                name: 'CSR & Accord',
                color: '#495057',
                level: 4,
            },
            {
                id: 'MI S',
                name: 'MI S',
                color: '#495057',
                level: 4,
            },
            {
                id: 'Manufacturing Excellence',
                name: 'Manufacturing Excellence',
                color: '#495057',
                level: 4,
            },
            {
                id: 'Product Library',
                name: 'Product Library',
                color: '#495057',
                level: 4,
            },
            {
                id: 'Human Resource',
                name: 'Human Resource',
                color: '#495057',
                level: 4,
            },
            {
                id: 'Logistics1',
                name: 'Grephen Almas',
                title: 'Logistics Manager',
                email: 'grephen@eurocentra.com.pk',
                color: '#007AD0',
                level: 5,
                image: 'https://wp-assets.highcharts.com/www-highcharts-com/blog/wp-content/uploads/2018/11/13105551/Vidar.jpg',
                dataLabels: {
                    format: '<div class="node-box"><img class="node-img" src="{point.image}" style="width: 50px; height: 50px;"><div class="node-info"><h5>{point.name}</h5><h6>{point.title}</h6></div></div>'
                }
            },
            {
                id: 'Logistics2',
                name: 'Mehreen Idrees',
                title: 'Assisstant Logistics <br/> Manager',
                email: 'Mehreen@eurocentra.com.pk',
                color: '#007AD0',
                level: 6,
                image: 'https://wp-assets.highcharts.com/www-highcharts-com/blog/wp-content/uploads/2018/11/13105551/Vidar.jpg',
                dataLabels: {
                    format: '<div class="node-box"><img class="node-img" src="{point.image}" style="width: 50px; height: 50px;"><div class="node-info"><h5>{point.name}</h5><h6>{point.title}</h6></div></div>'
                }
            },
            {
                id: 'Logistics3',
                name: 'Abdul Wahid',
                title: 'Assisstant Logistics <br/> Manager',
                email: 'A.wahid@eurocentra.com.pk',
                color: '#007AD0',
                level: 7,
                image: 'https://wp-assets.highcharts.com/www-highcharts-com/blog/wp-content/uploads/2018/11/13105551/Vidar.jpg',
                dataLabels: {
                    format: '<div class="node-box"><img class="node-img" src="{point.image}" style="width: 50px; height: 50px;"><div class="node-info"><h5>{point.name}</h5><h6>{point.title}</h6></div></div>'
                }
            },
            {
                id: 'Logistics4',
                name: 'Owais Nasir',
                title: 'Logistics Executive',
                email: 'Owais.nasir@eurocentra.com.pk',
                color: '#007AD0',
                level: 8,
                image: 'https://wp-assets.highcharts.com/www-highcharts-com/blog/wp-content/uploads/2018/11/13105551/Vidar.jpg',
                dataLabels: {
                    format: '<div class="node-box"><img class="node-img" src="{point.image}" style="width: 50px; height: 50px;"><div class="node-info"><h5>{point.name}</h5><h6>{point.title}</h6></div></div>'
                }
            },
            {
                id: 'Sustainability1',
                name: 'Ahmed Adeel',
                title: 'Sustainability Manager',
                email: 'ahmed.adeel@eurocentra.com.pk',
                color: '#007AD0',
                level: 5,
                image: 'https://wp-assets.highcharts.com/www-highcharts-com/blog/wp-content/uploads/2018/11/13105551/Vidar.jpg',
                dataLabels: {
                    format: '<div class="node-box"><img class="node-img" src="{point.image}" style="width: 50px; height: 50px;"><div class="node-info"><h5>{point.name}</h5><h6>{point.title}</h6></div></div>'
                }
            },
            {
                id: 'CSR & Accord1',
                name: 'Jameel Ahmed',
                title: 'Project Manager',
                email: 'Jameel@eurocentra.com.pk',
                color: '#007AD0',
                level: 5,
                image: 'https://wp-assets.highcharts.com/www-highcharts-com/blog/wp-content/uploads/2018/11/13105551/Vidar.jpg',
                dataLabels: {
                    format: '<div class="node-box"><img class="node-img" src="{point.image}" style="width: 50px; height: 50px;"><div class="node-info"><h5>{point.name}</h5><h6>{point.title}</h6></div></div>'
                }
            },
            {
                id: 'CSR & Accord2',
                name: 'Basit Ali',
                title: 'CSR Executive',
                email: 'Basit.ali@eurocentra.com.pk',
                color: '#007AD0',
                level: 6,
                image: 'https://wp-assets.highcharts.com/www-highcharts-com/blog/wp-content/uploads/2018/11/13105551/Vidar.jpg',
                dataLabels: {
                    format: '<div class="node-box"><img class="node-img" src="{point.image}" style="width: 50px; height: 50px;"><div class="node-info"><h5>{point.name}</h5><h6>{point.title}</h6></div></div>'
                }
            },
            {
                id: 'MI S1',
                name: 'Muhammad Aamir ',
                title: 'MIS Manager',
                email: 'aamir@eurocentra.com.pk',
                color: '#007AD0',
                level: 5,
                image: 'https://wp-assets.highcharts.com/www-highcharts-com/blog/wp-content/uploads/2018/11/13105551/Vidar.jpg',
                dataLabels: {
                    format: '<div class="node-box"><img class="node-img" src="{point.image}" style="width: 50px; height: 50px;"><div class="node-info"><h5>{point.name}</h5><h6>{point.title}</h6></div></div>'
                }
            },
            {
                id: 'MI S2',
                name: 'Sadad Ali',
                title: 'MIS Executive',
                email: 'sadad@eurocentra.com.pk',
                color: '#007AD0',
                level: 6,
                image: 'https://wp-assets.highcharts.com/www-highcharts-com/blog/wp-content/uploads/2018/11/13105551/Vidar.jpg',
                dataLabels: {
                    format: '<div class="node-box"><img class="node-img" src="{point.image}" style="width: 50px; height: 50px;"><div class="node-info"><h5>{point.name}</h5><h6>{point.title}</h6></div></div>'
                }
            },
            {
                id: 'MI S3',
                name: 'Sheikh Muhammad Ijlal',
                title: 'MIS Executive',
                email: 'Ijlal@eurocentra.com.pk',
                color: '#007AD0',
                level: 7,
                image: 'https://wp-assets.highcharts.com/www-highcharts-com/blog/wp-content/uploads/2018/11/13105551/Vidar.jpg',
                dataLabels: {
                    format: '<div class="node-box"><img class="node-img" src="{point.image}" style="width: 50px; height: 50px;"><div class="node-info"><h5>{point.name}</h5><h6>{point.title}</h6></div></div>'
                }
            },
            {
                id: 'Manufacturing Excellence1',
                name: 'Muhammad Noman',
                title: 'Excellence Manager',
                email: 'Noman@eurocentra.com.pk',
                color: '#007AD0',
                level: 5,
                image: 'https://wp-assets.highcharts.com/www-highcharts-com/blog/wp-content/uploads/2018/11/13105551/Vidar.jpg',
                dataLabels: {
                    format: '<div class="node-box"><img class="node-img" src="{point.image}" style="width: 50px; height: 50px;"><div class="node-info"><h5>{point.name}</h5><h6>{point.title}</h6></div></div>'
                }
            },
            {
                id: 'Product Library1',
                name: 'Sana Zahid',
                title: 'Assisstant <br/> Product Manager',
                email: 'Sana@eurocentra.com.pk',
                color: '#007AD0',
                level: 5,
                image: 'https://wp-assets.highcharts.com/www-highcharts-com/blog/wp-content/uploads/2018/11/13105551/Vidar.jpg',
                dataLabels: {
                    format: '<div class="node-box"><img class="node-img" src="{point.image}" style="width: 50px; height: 50px;"><div class="node-info"><h5>{point.name}</h5><h6>{point.title}</h6></div></div>'
                }
            },
            {
                id: 'Human Resource1',
                name: 'Muhammad Safwan',
                title: 'HR Exexcutive',
                email: 'hr@eurocentra.com.pk',
                color: '#007AD0',
                level: 5,
                image: 'https://wp-assets.highcharts.com/www-highcharts-com/blog/wp-content/uploads/2018/11/13105551/Vidar.jpg',
                dataLabels: {
                    format: '<div class="node-box"><img class="node-img" src="{point.image}" style="width: 50px; height: 50px;"><div class="node-info"><h5>{point.name}</h5><h6>{point.title}</h6></div></div>'
                }
            },
            {
                id: 'Supply chain1',
                name: 'Abdul Saboor',
                title: 'Head of Supply Chain',
                email: 'abdul.saboor@eurocentra.com.pk',
                color: '#007AD0',
                level: 3,
                image: 'https://wp-assets.highcharts.com/www-highcharts-com/blog/wp-content/uploads/2018/11/13105551/Vidar.jpg',
                dataLabels: {
                    format: '<div class="node-box"><img class="node-img" src="{point.image}" style="width: 50px; height: 50px;"><div class="node-info"><h5>{point.name}</h5><h6>{point.title}</h6></div></div>'
                }
            },
            {
                id: 'Osg1',
                name: 'Ata Muhammad Madni',
                title: 'Manager Finance & <br/> Corporate Governance',
                email: 'Madni@eurocentra.com.pk',
                color: '#007AD0',
                level: 3,
                image: 'https://wp-assets.highcharts.com/www-highcharts-com/blog/wp-content/uploads/2018/11/13105551/Vidar.jpg',
                dataLabels: {
                    format: '<div class="node-box"><img class="node-img" src="{point.image}" style="width: 50px; height: 50px;"><div class="node-info"><h5>{point.name}</h5><h6>{point.title}</h6></div></div>'
                }
            },
            {
                id: 'Osg2',
                name: 'Sajjad Hussain',
                title: 'IT & Services Manager',
                email: 'it@eurocentra.com.pk',
                color: '#007AD0',
                level: 4,
                image: 'https://wp-assets.highcharts.com/www-highcharts-com/blog/wp-content/uploads/2018/11/13105551/Vidar.jpg',
                dataLabels: {
                    format: '<div class="node-box"><img class="node-img" src="{point.image}" style="width: 50px; height: 50px;"><div class="node-info"><h5>{point.name}</h5><h6>{point.title}</h6></div></div>'
                }
            },
            {
                id: 'Osg3',
                name: 'Abdul Manan',
                title: 'Facility Services <br/> Manager',
                email: 'abdulmanan@eurocentra.com.pk',
                color: '#007AD0',
                level: 5,
                image: 'https://wp-assets.highcharts.com/www-highcharts-com/blog/wp-content/uploads/2018/11/13105551/Vidar.jpg',
                dataLabels: {
                    format: '<div class="node-box"><img class="node-img" src="{point.image}" style="width: 50px; height: 50px;"><div class="node-info"><h5>{point.name}</h5><h6>{point.title}</h6></div></div>'
                }
            },
            {
                id: 'Osg4',
                name: 'Naseem',
                title: 'Assistant Facility <br/> Manager ',
                email: 'naseem@eurocentra.com.pk',
                color: '#007AD0',
                level: 6,
                image: 'https://wp-assets.highcharts.com/www-highcharts-com/blog/wp-content/uploads/2018/11/13105551/Vidar.jpg',
                dataLabels: {
                    format: '<div class="node-box"><img class="node-img" src="{point.image}" style="width: 50px; height: 50px;"><div class="node-info"><h5>{point.name}</h5><h6>{point.title}</h6></div></div>'
                }
            },
            {
                id: 'Osg5',
                name: 'Pervez Ahmed',
                title: 'Front Desk Officer',
                email: 'pervez@eurocentra.com.pk',
                color: '#007AD0',
                level: 7,
                image: 'https://wp-assets.highcharts.com/www-highcharts-com/blog/wp-content/uploads/2018/11/13105551/Vidar.jpg',
                dataLabels: {
                    format: '<div class="node-box"><img class="node-img" src="{point.image}" style="width: 50px; height: 50px;"><div class="node-info"><h5>{point.name}</h5><h6>{point.title}</h6></div></div>'
                }
            },
            {
                id: 'Osg6',
                name: 'Humayun Khan',
                title: 'Operation Supervisor',
                color: '#007AD0',
                level: 8,
                image: 'https://wp-assets.highcharts.com/www-highcharts-com/blog/wp-content/uploads/2018/11/13105551/Vidar.jpg',
                dataLabels: {
                    format: '<div class="node-box"><img class="node-img" src="{point.image}" style="width: 50px; height: 50px;"><div class="node-info"><h5>{point.name}</h5><h6>{point.title}</h6></div></div>'
                }
            },
            {
                id: 'Osg7',
                name: 'Irfan',
                title: 'Facility Officer',
                color: '#007AD0',
                level: 9,
                image: 'https://wp-assets.highcharts.com/www-highcharts-com/blog/wp-content/uploads/2018/11/13105551/Vidar.jpg',
                dataLabels: {
                    format: '<div class="node-box"><img class="node-img" src="{point.image}" style="width: 50px; height: 50px;"><div class="node-info"><h5>{point.name}</h5><h6>{point.title}</h6></div></div>'
                }
            },
            {
                id: 'Osg8',
                name: 'Naeem',
                title: 'Facility Officer',
                color: '#007AD0',
                level: 10,
                image: 'https://wp-assets.highcharts.com/www-highcharts-com/blog/wp-content/uploads/2018/11/13105551/Vidar.jpg',
                dataLabels: {
                    format: '<div class="node-box"><img class="node-img" src="{point.image}" style="width: 50px; height: 50px;"><div class="node-info"><h5>{point.name}</h5><h6>{point.title}</h6></div></div>'
                }
            },
            {
                id: 'Osg9',
                name: 'Fakhar Jahan',
                title: 'Facility Officer',
                color: '#007AD0',
                level: 11,
                image: 'https://wp-assets.highcharts.com/www-highcharts-com/blog/wp-content/uploads/2018/11/13105551/Vidar.jpg',
                dataLabels: {
                    format: '<div class="node-box"><img class="node-img" src="{point.image}" style="width: 50px; height: 50px;"><div class="node-info"><h5>{point.name}</h5><h6>{point.title}</h6></div></div>'
                }
            },
            {
                id: 'Osg10',
                name: 'Sardar Naeem Ahmed',
                title: 'Operation Supervisor',
                color: '#007AD0',
                level: 12,
                image: 'https://wp-assets.highcharts.com/www-highcharts-com/blog/wp-content/uploads/2018/11/13105551/Vidar.jpg',
                dataLabels: {
                    format: '<div class="node-box"><img class="node-img" src="{point.image}" style="width: 50px; height: 50px;"><div class="node-info"><h5>{point.name}</h5><h6>{point.title}</h6></div></div>'
                }
            },
            {
                id: 'Osg11',
                name: 'Muhammad Aqib',
                title: 'Facility Officer',
                color: '#007AD0',
                level: 13,
                image: 'https://wp-assets.highcharts.com/www-highcharts-com/blog/wp-content/uploads/2018/11/13105551/Vidar.jpg',
                dataLabels: {
                    format: '<div class="node-box"><img class="node-img" src="{point.image}" style="width: 50px; height: 50px;"><div class="node-info"><h5>{point.name}</h5><h6>{point.title}</h6></div></div>'
                }
            },
            {
                id: 'Osg12',
                name: 'Syed Uraish Ali',
                title: 'Facility Officer',
                color: '#007AD0',
                level: 14,
                image: 'https://wp-assets.highcharts.com/www-highcharts-com/blog/wp-content/uploads/2018/11/13105551/Vidar.jpg',
                dataLabels: {
                    format: '<div class="node-box"><img class="node-img" src="{point.image}" style="width: 50px; height: 50px;"><div class="node-info"><h5>{point.name}</h5><h6>{point.title}</h6></div></div>'
                }
            },
            {
                id: 'Osg13',
                name: 'Samoon',
                title: 'Facility Officer',
                color: '#007AD0',
                level: 15,
                image: 'https://wp-assets.highcharts.com/www-highcharts-com/blog/wp-content/uploads/2018/11/13105551/Vidar.jpg',
                dataLabels: {
                    format: '<div class="node-box"><img class="node-img" src="{point.image}" style="width: 50px; height: 50px;"><div class="node-info"><h5>{point.name}</h5><h6>{point.title}</h6></div></div>'
                }
            },
            {
                id: 'Osg14',
                name: 'Javaid',
                title: 'Chauffeur / Driver',
                color: '#007AD0',
                level: 16,
                image: 'https://wp-assets.highcharts.com/www-highcharts-com/blog/wp-content/uploads/2018/11/13105551/Vidar.jpg',
                dataLabels: {
                    format: '<div class="node-box"><img class="node-img" src="{point.image}" style="width: 50px; height: 50px;"><div class="node-info"><h5>{point.name}</h5><h6>{point.title}</h6></div></div>'
                }
            },
            {
                id: 'Osg15',
                name: 'Saquib Hussain',
                title: 'Chauffeur / Driver',
                color: '#007AD0',
                level: 17,
                image: 'https://wp-assets.highcharts.com/www-highcharts-com/blog/wp-content/uploads/2018/11/13105551/Vidar.jpg',
                dataLabels: {
                    format: '<div class="node-box"><img class="node-img" src="{point.image}" style="width: 50px; height: 50px;"><div class="node-info"><h5>{point.name}</h5><h6>{point.title}</h6></div></div>'
                }
            },
            {
                id: 'Osg16',
                name: 'Muhammad Shakeel',
                title: 'Chauffeur / Driver',
                color: '#007AD0',
                level: 18,
                image: 'https://wp-assets.highcharts.com/www-highcharts-com/blog/wp-content/uploads/2018/11/13105551/Vidar.jpg',
                dataLabels: {
                    format: '<div class="node-box"><img class="node-img" src="{point.image}" style="width: 50px; height: 50px;"><div class="node-info"><h5>{point.name}</h5><h6>{point.title}</h6></div></div>'
                }
            },
            {
                id: 'Osg17',
                name: 'Fareed Ghani',
                title: 'Chauffeur / Driver',
                color: '#007AD0',
                level: 19,
                image: 'https://wp-assets.highcharts.com/www-highcharts-com/blog/wp-content/uploads/2018/11/13105551/Vidar.jpg',
                dataLabels: {
                    format: '<div class="node-box"><img class="node-img" src="{point.image}" style="width: 50px; height: 50px;"><div class="node-info"><h5>{point.name}</h5><h6>{point.title}</h6></div></div>'
                }
            },
            {
                id: 'Osg18',
                name: 'Munir Ahmed',
                title: 'Chauffeur / Driver',
                color: '#007AD0',
                level: 20,
                image: 'https://wp-assets.highcharts.com/www-highcharts-com/blog/wp-content/uploads/2018/11/13105551/Vidar.jpg',
                dataLabels: {
                    format: '<div class="node-box"><img class="node-img" src="{point.image}" style="width: 50px; height: 50px;"><div class="node-info"><h5>{point.name}</h5><h6>{point.title}</h6></div></div>'
                }
            },
            {
                id: 'Osg19',
                name: 'Riaz Shahid',
                title: 'Chauffeur / Driver',
                color: '#007AD0',
                level: 21,
                image: 'https://wp-assets.highcharts.com/www-highcharts-com/blog/wp-content/uploads/2018/11/13105551/Vidar.jpg',
                dataLabels: {
                    format: '<div class="node-box"><img class="node-img" src="{point.image}" style="width: 50px; height: 50px;"><div class="node-info"><h5>{point.name}</h5><h6>{point.title}</h6></div></div>'
                }
            },
            {
                id: 'Osg20',
                name: 'Muhammad Jalil',
                title: 'Chauffeur / Driver',
                color: '#007AD0',
                level: 22,
                image: 'https://wp-assets.highcharts.com/www-highcharts-com/blog/wp-content/uploads/2018/11/13105551/Vidar.jpg',
                dataLabels: {
                    format: '<div class="node-box"><img class="node-img" src="{point.image}" style="width: 50px; height: 50px;"><div class="node-info"><h5>{point.name}</h5><h6>{point.title}</h6></div></div>'
                }
            },
            {
                id: 'Osg21',
                name: 'Zohaib',
                title: 'Chauffeur / Driver',
                color: '#007AD0',
                level: 23,
                image: 'https://wp-assets.highcharts.com/www-highcharts-com/blog/wp-content/uploads/2018/11/13105551/Vidar.jpg',
                dataLabels: {
                    format: '<div class="node-box"><img class="node-img" src="{point.image}" style="width: 50px; height: 50px;"><div class="node-info"><h5>{point.name}</h5><h6>{point.title}</h6></div></div>'
                }
            },
            {
                id: 'Osg22',
                name: 'Sadiq Hussain',
                title: 'Gardner',
                color: '#007AD0',
                level: 24,
                image: 'https://wp-assets.highcharts.com/www-highcharts-com/blog/wp-content/uploads/2018/11/13105551/Vidar.jpg',
                dataLabels: {
                    format: '<div class="node-box"><img class="node-img" src="{point.image}" style="width: 50px; height: 50px;"><div class="node-info"><h5>{point.name}</h5><h6>{point.title}</h6></div></div>'
                }
            },
            {
                id: 'Osg23',
                name: 'Syed Zafar',
                title: 'Gardner',
                color: '#007AD0',
                level: 25,
                image: 'https://wp-assets.highcharts.com/www-highcharts-com/blog/wp-content/uploads/2018/11/13105551/Vidar.jpg',
                dataLabels: {
                    format: '<div class="node-box"><img class="node-img" src="{point.image}" style="width: 50px; height: 50px;"><div class="node-info"><h5>{point.name}</h5><h6>{point.title}</h6></div></div>'
                }
            },
            {
                id: 'Osg24',
                name: 'Morris',
                title: 'Sweeper',
                color: '#007AD0',
                level: 25,
                image: 'https://wp-assets.highcharts.com/www-highcharts-com/blog/wp-content/uploads/2018/11/13105551/Vidar.jpg',
                dataLabels: {
                    format: '<div class="node-box"><img class="node-img" src="{point.image}" style="width: 50px; height: 50px;"><div class="node-info"><h5>{point.name}</h5><h6>{point.title}</h6></div></div>'
                }
            },



        ],
        colorByPoint:false,
        color: '#007ad0',
        shadow: {
            color: '#d1d1d1',
            width: 8,
            offsetX: 0,
            offsetY: 4
        },
        borderColor: null,
        borderRadius: 0,
        nodeWidth: 65,
        nodePadding: 20,
        nodeAlign: 'left'

    }],
    tooltip: {
        outside: true,
        backgroundColor: '#666',
        borderColor: '#666',
        borderRadius: 2,
        style: {
            color: '#fff',
            cursor: 'default',
            fontSize: '14px',
            lineHeight: '22px',
        },
        formatter: function () {
            const point = this.point;
            let tooltipContent = `<strong>Name:</strong> ${point.name}<br>`;
            if (point.title) {
                tooltipContent += `<strong>Title:</strong> ${point.title}<br>`;
            }
            if (point.email) {
                tooltipContent += `<strong>Email:</strong> ${point.email}<br>`;
            }
            return tooltipContent;
        }
    },
});