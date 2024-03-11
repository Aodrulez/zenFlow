module.exports = {
    params: {
        class: 'PAD', // for Button
        neg: {type: 'net', value: 'neg'},
        pos: {type: 'net', value: 'pos'}
    },
    body: p => `
    
    (module lib:bat (layer F.Cu) (tstamp 5BF2CC94)
        ${p.at /* parametric position */}
		
      (fp_text reference "BAT" (at 0 0) (layer F.SilkS) ${p.ref_hide} (effects (font (size 1.27 1.27) (thickness 0.15))))
      (fp_text value "" (at 0 0) (layer F.SilkS) hide (effects (font (size 1.27 1.27) (thickness 0.15))))
	  
	  
	  (fp_line (start -1 1.5) (end -1 2.0) (layer F.SilkS) (width 0.15))
      (fp_line (start -1.25 1.75) (end -0.75 1.75) (layer F.SilkS) (width 0.15))
		
	  (pad 1 thru_hole circle (at 0 -1 0) (size 1 1) (drill 0.7) (layers *.Cu *.SilkS *.Mask) ${p.neg.str}) 
	  (pad 2 thru_hole circle (at 0 1 0) (size 1 1) (drill 0.7) (layers *.Cu *.SilkS *.Mask) ${p.pos.str})
     )

    `
}