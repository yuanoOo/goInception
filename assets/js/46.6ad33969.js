(window.webpackJsonp=window.webpackJsonp||[]).push([[46],{440:function(_,v,t){"use strict";t.r(v);var e=t(44),a=Object(e.a)({},(function(){var _=this,v=_.$createElement,t=_._self._c||v;return t("ContentSlotsDistributor",{attrs:{"slot-key":_.$parent.slotKey}},[t("h1",{attrs:{id:"权限说明"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#权限说明"}},[_._v("#")]),_._v(" 权限说明")]),_._v(" "),t("p",[_._v("不同功能及阶段需要不同的权限，下面会列出各项功能可能涉及的权限要求，如有遗漏之处欢迎提出和补充。")]),_._v(" "),t("p",[_._v("建议的权限为：\n"),t("code",[_._v("GRANT ALL PRIVILEGES ON *.* TO ...")])]),_._v(" "),t("p",[_._v("或者")]),_._v(" "),t("p",[t("code",[_._v("GRANT SELECT, INSERT, UPDATE, DELETE, CREATE, DROP, PROCESS, REFERENCES, INDEX, ALTER, SUPER, REPLICATION SLAVE, REPLICATION CLIENT, TRIGGER ON *.* TO ...")])]),_._v(" "),t("h2",{attrs:{id:"审核功能"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#审核功能"}},[_._v("#")]),_._v(" 审核功能")]),_._v(" "),t("ul",[t("li",[t("code",[_._v("information_schema库")]),_._v(" 元数据查询权限，表结构，索引信息，约束等")]),_._v(" "),t("li",[t("code",[_._v("mysql库")]),_._v(" use权限，没有查询，默认连接该库，可通过调用选项的"),t("code",[_._v("--db")]),_._v("参数修改")]),_._v(" "),t("li",[t("code",[_._v("DML操作")]),_._v(" 审核时会对DML语句做explain操作，该操作需要实际的相应DML权限。")]),_._v(" "),t("li",[t("code",[_._v("REFERENCES")]),_._v(" 仅外键需要")])]),_._v(" "),t("h2",{attrs:{id:"执行"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#执行"}},[_._v("#")]),_._v(" 执行")]),_._v(" "),t("ul",[t("li",[_._v("实际的SQL执行权限")])]),_._v(" "),t("h3",{attrs:{id:"使用pt-osc"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#使用pt-osc"}},[_._v("#")]),_._v(" 使用pt-osc")]),_._v(" "),t("ul",[t("li",[t("code",[_._v("PROCESS")]),_._v(" 权限，查看processlist信息")]),_._v(" "),t("li",[t("code",[_._v("TRIGGER")]),_._v(" 创建和删除触发器")]),_._v(" "),t("li",[t("code",[_._v("SUPER")]),_._v(" 或 "),t("code",[_._v("REPLICATION CLIENT")]),_._v(" 有主从时,查看主从延迟")])]),_._v(" "),t("h3",{attrs:{id:"使用gh-ost"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#使用gh-ost"}},[_._v("#")]),_._v(" 使用gh-ost")]),_._v(" "),t("ul",[t("li",[t("code",[_._v("SUPER|REPLICATION CLIENT, REPLICATION SLAVE")]),_._v(" binlog解析")]),_._v(" "),t("li",[t("code",[_._v("ALTER")]),_._v(", "),t("code",[_._v("CREATE")]),_._v(", "),t("code",[_._v("DELETE")]),_._v(", "),t("code",[_._v("DROP")]),_._v(", "),t("code",[_._v("INDEX")]),_._v(", "),t("code",[_._v("INSERT")]),_._v(", "),t("code",[_._v("LOCK TABLES")]),_._v(", "),t("code",[_._v("SELECT")]),_._v(", "),t("code",[_._v("TRIGGER")]),_._v(", "),t("code",[_._v("UPDATE")])])]),_._v(" "),t("h2",{attrs:{id:"备份"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#备份"}},[_._v("#")]),_._v(" 备份")]),_._v(" "),t("h3",{attrs:{id:"远端数据库"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#远端数据库"}},[_._v("#")]),_._v(" 远端数据库")]),_._v(" "),t("ul",[t("li",[t("p",[t("code",[_._v("SUPER权限")]),_._v("，用以binlog格式不为row时执行"),t("code",[_._v("set session binlog_format='row'")])])]),_._v(" "),t("li",[t("p",[t("code",[_._v("SUPER|REPLICATION CLIENT, REPLICATION SLAVE")]),_._v(" binlog解析")])])]),_._v(" "),t("h3",{attrs:{id:"备份库"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#备份库"}},[_._v("#")]),_._v(" 备份库")]),_._v(" "),t("ul",[t("li",[t("code",[_._v("建议授予备份库实例的所有权限")])])])])}),[],!1,null,null,null);v.default=a.exports}}]);