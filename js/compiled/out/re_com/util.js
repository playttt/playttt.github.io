// Compiled by ClojureScript 1.7.170 {}
goog.provide('re_com.util');
goog.require('cljs.core');
goog.require('clojure.set');
goog.require('goog.date.DateTime');
goog.require('goog.date.UtcDateTime');
/**
 * Takes a function 'f' amd a map 'm'.  Applies 'f' to each value in 'm' and returns.
 * (fmap  inc  {:a 4  :b 2})   =>   {:a 5  :b 3}
 */
re_com.util.fmap = (function re_com$util$fmap(f,m){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__5440__auto__ = (function re_com$util$fmap_$_iter__10886(s__10887){
return (new cljs.core.LazySeq(null,(function (){
var s__10887__$1 = s__10887;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__10887__$1);
if(temp__4425__auto__){
var s__10887__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__10887__$2)){
var c__5438__auto__ = cljs.core.chunk_first.call(null,s__10887__$2);
var size__5439__auto__ = cljs.core.count.call(null,c__5438__auto__);
var b__10889 = cljs.core.chunk_buffer.call(null,size__5439__auto__);
if((function (){var i__10888 = (0);
while(true){
if((i__10888 < size__5439__auto__)){
var vec__10892 = cljs.core._nth.call(null,c__5438__auto__,i__10888);
var k = cljs.core.nth.call(null,vec__10892,(0),null);
var val = cljs.core.nth.call(null,vec__10892,(1),null);
cljs.core.chunk_append.call(null,b__10889,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,f.call(null,val)], null));

var G__10894 = (i__10888 + (1));
i__10888 = G__10894;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10889),re_com$util$fmap_$_iter__10886.call(null,cljs.core.chunk_rest.call(null,s__10887__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10889),null);
}
} else {
var vec__10893 = cljs.core.first.call(null,s__10887__$2);
var k = cljs.core.nth.call(null,vec__10893,(0),null);
var val = cljs.core.nth.call(null,vec__10893,(1),null);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,f.call(null,val)], null),re_com$util$fmap_$_iter__10886.call(null,cljs.core.rest.call(null,s__10887__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5440__auto__.call(null,m);
})());
});
/**
 * Recursively merges maps. If vals are not maps, the last value wins.
 */
re_com.util.deep_merge = (function re_com$util$deep_merge(var_args){
var args__5733__auto__ = [];
var len__5726__auto___10896 = arguments.length;
var i__5727__auto___10897 = (0);
while(true){
if((i__5727__auto___10897 < len__5726__auto___10896)){
args__5733__auto__.push((arguments[i__5727__auto___10897]));

var G__10898 = (i__5727__auto___10897 + (1));
i__5727__auto___10897 = G__10898;
continue;
} else {
}
break;
}

var argseq__5734__auto__ = ((((0) < args__5733__auto__.length))?(new cljs.core.IndexedSeq(args__5733__auto__.slice((0)),(0))):null);
return re_com.util.deep_merge.cljs$core$IFn$_invoke$arity$variadic(argseq__5734__auto__);
});

re_com.util.deep_merge.cljs$core$IFn$_invoke$arity$variadic = (function (vals){
if(cljs.core.every_QMARK_.call(null,cljs.core.map_QMARK_,vals)){
return cljs.core.apply.call(null,cljs.core.merge_with,re_com.util.deep_merge,vals);
} else {
return cljs.core.last.call(null,vals);
}
});

re_com.util.deep_merge.cljs$lang$maxFixedArity = (0);

re_com.util.deep_merge.cljs$lang$applyTo = (function (seq10895){
return re_com.util.deep_merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq10895));
});
re_com.util.deref_or_value = (function re_com$util$deref_or_value(val_or_atom){
if(((!((val_or_atom == null)))?((((val_or_atom.cljs$lang$protocol_mask$partition0$ & (32768))) || (val_or_atom.cljs$core$IDeref$))?true:(((!val_or_atom.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,val_or_atom):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,val_or_atom))){
return cljs.core.deref.call(null,val_or_atom);
} else {
return val_or_atom;
}
});
re_com.util.get_element_by_id = (function re_com$util$get_element_by_id(id){
return document.getElementById(id);
});
/**
 * Left pad a string 's' with '0', until 's' has length 'len'. Return 's' unchanged, if it is already len or greater
 */
re_com.util.pad_zero = (function re_com$util$pad_zero(s,len){
if((cljs.core.count.call(null,s) < len)){
return cljs.core.apply.call(null,cljs.core.str,cljs.core.take_last.call(null,len,cljs.core.concat.call(null,cljs.core.repeat.call(null,len,"0"),s)));
} else {
return s;
}
});
/**
 * return 'num' as a string of 'len' characters, left padding with '0' as necessary
 */
re_com.util.pad_zero_number = (function re_com$util$pad_zero_number(num,len){
return re_com.util.pad_zero.call(null,[cljs.core.str(num)].join(''),len);
});
/**
 * takes a number (and optional :negative keyword to indicate a negative value) and returns that number as a string with 'px' at the end
 */
re_com.util.px = (function re_com$util$px(var_args){
var args__5733__auto__ = [];
var len__5726__auto___10903 = arguments.length;
var i__5727__auto___10904 = (0);
while(true){
if((i__5727__auto___10904 < len__5726__auto___10903)){
args__5733__auto__.push((arguments[i__5727__auto___10904]));

var G__10905 = (i__5727__auto___10904 + (1));
i__5727__auto___10904 = G__10905;
continue;
} else {
}
break;
}

var argseq__5734__auto__ = ((((1) < args__5733__auto__.length))?(new cljs.core.IndexedSeq(args__5733__auto__.slice((1)),(0))):null);
return re_com.util.px.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5734__auto__);
});

re_com.util.px.cljs$core$IFn$_invoke$arity$variadic = (function (val,negative){
return [cljs.core.str((cljs.core.truth_(negative)?(- val):val)),cljs.core.str("px")].join('');
});

re_com.util.px.cljs$lang$maxFixedArity = (1);

re_com.util.px.cljs$lang$applyTo = (function (seq10901){
var G__10902 = cljs.core.first.call(null,seq10901);
var seq10901__$1 = cljs.core.next.call(null,seq10901);
return re_com.util.px.cljs$core$IFn$_invoke$arity$variadic(G__10902,seq10901__$1);
});
/**
 * Removes the item at position n from a vector v, returning a shrunk vector
 */
re_com.util.remove_nth = (function re_com$util$remove_nth(v,n){
return cljs.core.vec.call(null,cljs.core.concat.call(null,cljs.core.subvec.call(null,v,(0),n),cljs.core.subvec.call(null,v,(n + (1)),cljs.core.count.call(null,v))));
});
re_com.util.insert_nth = (function re_com$util$insert_nth(vect,index,item){
return cljs.core.apply.call(null,cljs.core.merge,cljs.core.subvec.call(null,vect,(0),index),item,cljs.core.subvec.call(null,vect,index));
});
/**
 * Takes a vector of maps 'v'. Returns the position of the first item in 'v' whose id-fn (default :id) matches 'id'.
 * Returns nil if id not found
 */
re_com.util.position_for_id = (function re_com$util$position_for_id(var_args){
var args__5733__auto__ = [];
var len__5726__auto___10912 = arguments.length;
var i__5727__auto___10913 = (0);
while(true){
if((i__5727__auto___10913 < len__5726__auto___10912)){
args__5733__auto__.push((arguments[i__5727__auto___10913]));

var G__10914 = (i__5727__auto___10913 + (1));
i__5727__auto___10913 = G__10914;
continue;
} else {
}
break;
}

var argseq__5734__auto__ = ((((2) < args__5733__auto__.length))?(new cljs.core.IndexedSeq(args__5733__auto__.slice((2)),(0))):null);
return re_com.util.position_for_id.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5734__auto__);
});

re_com.util.position_for_id.cljs$core$IFn$_invoke$arity$variadic = (function (id,v,p__10909){
var map__10910 = p__10909;
var map__10910__$1 = ((((!((map__10910 == null)))?((((map__10910.cljs$lang$protocol_mask$partition0$ & (64))) || (map__10910.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10910):map__10910);
var id_fn = cljs.core.get.call(null,map__10910__$1,new cljs.core.Keyword(null,"id-fn","id-fn",316222798),new cljs.core.Keyword(null,"id","id",-1388402092));
var index_fn = ((function (map__10910,map__10910__$1,id_fn){
return (function (index,item){
if(cljs.core._EQ_.call(null,id_fn.call(null,item),id)){
return index;
} else {
return null;
}
});})(map__10910,map__10910__$1,id_fn))
;
return cljs.core.first.call(null,cljs.core.keep_indexed.call(null,index_fn,v));
});

re_com.util.position_for_id.cljs$lang$maxFixedArity = (2);

re_com.util.position_for_id.cljs$lang$applyTo = (function (seq10906){
var G__10907 = cljs.core.first.call(null,seq10906);
var seq10906__$1 = cljs.core.next.call(null,seq10906);
var G__10908 = cljs.core.first.call(null,seq10906__$1);
var seq10906__$2 = cljs.core.next.call(null,seq10906__$1);
return re_com.util.position_for_id.cljs$core$IFn$_invoke$arity$variadic(G__10907,G__10908,seq10906__$2);
});
/**
 * Takes a vector of maps 'v'. Returns the first item in 'v' whose id-fn (default :id) matches 'id'.
 * Returns nil if id not found
 */
re_com.util.item_for_id = (function re_com$util$item_for_id(var_args){
var args__5733__auto__ = [];
var len__5726__auto___10922 = arguments.length;
var i__5727__auto___10923 = (0);
while(true){
if((i__5727__auto___10923 < len__5726__auto___10922)){
args__5733__auto__.push((arguments[i__5727__auto___10923]));

var G__10924 = (i__5727__auto___10923 + (1));
i__5727__auto___10923 = G__10924;
continue;
} else {
}
break;
}

var argseq__5734__auto__ = ((((2) < args__5733__auto__.length))?(new cljs.core.IndexedSeq(args__5733__auto__.slice((2)),(0))):null);
return re_com.util.item_for_id.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5734__auto__);
});

re_com.util.item_for_id.cljs$core$IFn$_invoke$arity$variadic = (function (id,v,p__10919){
var map__10920 = p__10919;
var map__10920__$1 = ((((!((map__10920 == null)))?((((map__10920.cljs$lang$protocol_mask$partition0$ & (64))) || (map__10920.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10920):map__10920);
var id_fn = cljs.core.get.call(null,map__10920__$1,new cljs.core.Keyword(null,"id-fn","id-fn",316222798),new cljs.core.Keyword(null,"id","id",-1388402092));
return cljs.core.first.call(null,cljs.core.filter.call(null,((function (map__10920,map__10920__$1,id_fn){
return (function (p1__10915_SHARP_){
return cljs.core._EQ_.call(null,id_fn.call(null,p1__10915_SHARP_),id);
});})(map__10920,map__10920__$1,id_fn))
,v));
});

re_com.util.item_for_id.cljs$lang$maxFixedArity = (2);

re_com.util.item_for_id.cljs$lang$applyTo = (function (seq10916){
var G__10917 = cljs.core.first.call(null,seq10916);
var seq10916__$1 = cljs.core.next.call(null,seq10916);
var G__10918 = cljs.core.first.call(null,seq10916__$1);
var seq10916__$2 = cljs.core.next.call(null,seq10916__$1);
return re_com.util.item_for_id.cljs$core$IFn$_invoke$arity$variadic(G__10917,G__10918,seq10916__$2);
});
/**
 * Takes a vector of maps 'v', each of which has an id-fn (default :id) key.
 *   Return v where item matching 'id' is excluded
 */
re_com.util.remove_id_item = (function re_com$util$remove_id_item(var_args){
var args__5733__auto__ = [];
var len__5726__auto___10932 = arguments.length;
var i__5727__auto___10933 = (0);
while(true){
if((i__5727__auto___10933 < len__5726__auto___10932)){
args__5733__auto__.push((arguments[i__5727__auto___10933]));

var G__10934 = (i__5727__auto___10933 + (1));
i__5727__auto___10933 = G__10934;
continue;
} else {
}
break;
}

var argseq__5734__auto__ = ((((2) < args__5733__auto__.length))?(new cljs.core.IndexedSeq(args__5733__auto__.slice((2)),(0))):null);
return re_com.util.remove_id_item.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5734__auto__);
});

re_com.util.remove_id_item.cljs$core$IFn$_invoke$arity$variadic = (function (id,v,p__10929){
var map__10930 = p__10929;
var map__10930__$1 = ((((!((map__10930 == null)))?((((map__10930.cljs$lang$protocol_mask$partition0$ & (64))) || (map__10930.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10930):map__10930);
var id_fn = cljs.core.get.call(null,map__10930__$1,new cljs.core.Keyword(null,"id-fn","id-fn",316222798),new cljs.core.Keyword(null,"id","id",-1388402092));
return cljs.core.filterv.call(null,((function (map__10930,map__10930__$1,id_fn){
return (function (p1__10925_SHARP_){
return cljs.core.not_EQ_.call(null,id_fn.call(null,p1__10925_SHARP_),id);
});})(map__10930,map__10930__$1,id_fn))
,v);
});

re_com.util.remove_id_item.cljs$lang$maxFixedArity = (2);

re_com.util.remove_id_item.cljs$lang$applyTo = (function (seq10926){
var G__10927 = cljs.core.first.call(null,seq10926);
var seq10926__$1 = cljs.core.next.call(null,seq10926);
var G__10928 = cljs.core.first.call(null,seq10926__$1);
var seq10926__$2 = cljs.core.next.call(null,seq10926__$1);
return re_com.util.remove_id_item.cljs$core$IFn$_invoke$arity$variadic(G__10927,G__10928,seq10926__$2);
});
/**
 * (for [[index item first? last?] (enumerate coll)] ...)  
 */
re_com.util.enumerate = (function re_com$util$enumerate(coll){
var c = (cljs.core.count.call(null,coll) - (1));
var f = ((function (c){
return (function (index,item){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,item,cljs.core._EQ_.call(null,(0),index),cljs.core._EQ_.call(null,c,index)], null);
});})(c))
;
return cljs.core.map_indexed.call(null,f,coll);
});
/**
 * Given a DOM node, I traverse through all ascendant nodes (until I reach body), summing any scrollLeft and scrollTop values
 * and return these sums in a map
 */
re_com.util.sum_scroll_offsets = (function re_com$util$sum_scroll_offsets(node){
var current_node = node.parentNode;
var sum_scroll_left = (0);
var sum_scroll_top = (0);
while(true){
if(cljs.core.not_EQ_.call(null,current_node.tagName,"BODY")){
var G__10935 = current_node.parentNode;
var G__10936 = (sum_scroll_left + current_node.scrollLeft);
var G__10937 = (sum_scroll_top + current_node.scrollTop);
current_node = G__10935;
sum_scroll_left = G__10936;
sum_scroll_top = G__10937;
continue;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"left","left",-399115937),sum_scroll_left,new cljs.core.Keyword(null,"top","top",-1856271961),sum_scroll_top], null);
}
break;
}
});
/**
 * Answer a goog.date.UtcDateTime based on local date/time.
 */
re_com.util.now__GT_utc = (function re_com$util$now__GT_utc(){
var local_date = (new goog.date.DateTime());
return (new goog.date.UtcDateTime(local_date.getYear(),local_date.getMonth(),local_date.getDate(),(0),(0),(0),(0)));
});

//# sourceMappingURL=util.js.map?rel=1464143787848